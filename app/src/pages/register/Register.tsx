import { useState, useRef, ChangeEvent } from "react";
import { Navbar, Footer } from "../../componenets"
import PasswdStrengthBar from "./PasswordInput";
import EmailInput from "./EmailInput";
import { Link } from "react-router-dom";
import zxcvbn from "zxcvbn";
import argon2 from 'argon2-wasm-esm';
import { validateEmail } from "./EmailInput";
import joi from 'joi';
import { newProps } from "./Lib";
import UsernameInput from "./UsernameInput";

export default () => {
  const [passwd, setpasswd] = useState('');
  const passwdInp = useRef<HTMLInputElement>(null);

  const [email, emailref] = newProps();
  const [uname, unameref] = newProps();

  const validateUname = (inpUname: string) => {
    const res = joi.string().min(3).max(30).required().validate(inpUname);
    if (res.error) {
      uname.setErr('username must be at least 3 characters long');
      uname.setCSS('border-red-500');
      return false;
    } else {
      uname.setErr('');
      uname.setCSS('');
      return true;
    }
  }

  const unameChange = (e: ChangeEvent<HTMLInputElement>) => {
    validateUname(e.target.value);
    uname.set(e.target.value);
  }

  const onSubmit = async (data: React.FormEvent<HTMLFormElement>) => {
    data.preventDefault();
    if (!validateEmail(email.val) || !validateUname(uname.val)) return;

    if (Math.log2(zxcvbn(passwd).guesses) < 22) {
      passwdInp.current?.focus();
      return;
    }

    const getHash = async (inp: string) => {
      let hash: string = '';
      await argon2
        .hash({ pass: { inp }, salt: 'somesalt' })
        .then(h => hash = h.hashHex)
        .catch(e => console.error(e.message, e.code));
      if (!hash) throw new Error('Hash is empty');
      return hash;
    }

    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: uname.val,
          email: email.val,
          password: await getHash(passwd)
        })
      });
      if (response.ok) {
        window.location.href = "/login";
      } else {
        if (response.status === 401) {
          email.setErr('Email is already used');
          email.setCSS('border-red-500');
          emailref.current?.focus();
          return;
        } else if (response.status === 462) {
          uname.setErr('Username is already used');
          uname.setCSS('border-red-500');
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="bg-primary">
        <Navbar />

        <div className="mt-20 flex items-center justify-center">
          <div className="bg-secondary rounded-3xl font-poppins border border-black text-gray-300">
            <h2 className="text-2xl border-b-2 w-full border-gray-600 text-center p-5">Register</h2>
            <form onSubmit={onSubmit} className="flex flex-col p-10 sm:p-20">

              <EmailInput {...email} ref={emailref} />

              <UsernameInput {...uname} ref={unameref} />

              <PasswdStrengthBar passwd={passwd} setpasswd={setpasswd} ref={passwdInp} />

              <button type="submit" className="bg-gray-600 rounded-lg py-2 text-gray-300">Register</button>

              <Link to="/login" className="text-orange-gradient mt-5">Log In</Link>
            </form>
          </div>
        </div>
      </div >

      <div className="footer">
        <Footer />
      </div>
    </>
  )
}