import { useState, useRef } from "react";
import { Navbar, Footer, PasswdStrengthBar } from "../componenets"
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import zxcvbn from "zxcvbn";

const schema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
});

type FormData = {
  email: string;
};

function Regitster() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    if (Math.log2(zxcvbn(passwd).guesses) < 22) {
      passwdInp.current?.focus();
      return;
    }
    if (data.email.length < 5) {
      unameInp.current?.focus();
      return;
    }

    console.log(data);
  };

  const [passwd, setpasswd] = useState('');
  const unameInp = useRef<HTMLInputElement>(null);
  const passwdInp = useRef<HTMLInputElement>(null);


  return (
    <>
      <div className="bg-primary">
        <Navbar />

        <div className="mt-20 flex items-center justify-center">
          <div className="bg-secondary rounded-3xl font-poppins border border-black text-gray-300">
            <h2 className="text-2xl border-b-2 w-full border-gray-600 text-center p-5">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-10 sm:p-20">
              <input type="email"
                placeholder="Email"
                className="bg-transparent border-b border-gray-600 text-gray-300 mt-4"
                {...register('email')}
              />
              {errors.email && <span className="text-red-200">{errors.email.message}</span>}

              <input type="username" ref={unameInp}
                placeholder="Username"
                className="bg-transparent border-b border-gray-600 text-gray-300 mt-4"
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

export default Regitster