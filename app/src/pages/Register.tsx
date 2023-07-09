import { useState, useRef } from "react";
import { Navbar, Footer, PasswdStrengthBar } from "../componenets"
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import zxcvbn from "zxcvbn";
import argon2 from 'argon2-wasm-esm';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  username: yup.string().required('Username is required')
});

type FormData = {
  username: any;
  email: string;
};

export default () => {
  const [passwd, setpasswd] = useState('');
  const [emailUsed, setEmailUsed] = useState('');
  const [emailUsedCSS, setemailUsedCSS] = useState('');
  const passwdInp = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
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
          name: data.username,
          email: data.email,
          password: await getHash(passwd)
        })
      });
      if (response.ok) {
        window.location.href = "/login";
      } else {
        if (response.status === 400) {
          setEmailUsed('Email is already used');
          setemailUsedCSS('border-red-500');
          return;
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
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-10 sm:p-20">
              {emailUsed && <span className="ml-1 text-red-200">{emailUsed}</span>}
              <input type="email"
                placeholder="Email"
                className={`bg-transparent border-b ${emailUsedCSS} text-gray-300 mt-4`}
                {...register('email')}
              />
              {errors.email && <span className="text-red-200">{errors.email.message}</span>}

              <input type="username"
                placeholder="Username"
                className="bg-transparent border-b border-gray-600 text-gray-300 mt-4"
                {...register('username')}
              />

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