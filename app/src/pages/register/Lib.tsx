import React, { useRef, useState } from "react";
import isEmail from 'email-validator'
import Joi from 'joi';

// eslint-disable-next-line react-refresh/only-export-components
export const validateEmail = (email: string) => {
  return isEmail.validate(email);
}

// eslint-disable-next-line react-refresh/only-export-components
export const validateUname = (uname: string) => {
  return Joi.string().min(3).max(30).required().validate(uname).error ? true : false;
}

export interface subComponentProps {
  val: string,
  set: (value: string) => void,
  err: string,
  setErr: (value: string) => void,
  css: string,
  setCSS: (value: string) => void
}

export const NewProps = () => {

  const ref = useRef<HTMLInputElement>(null);
  const [val, set] = useState('');
  const [err, setErr] = useState('');
  const [css, setCSS] = useState('');

  const props: subComponentProps = {
    val: val,
    set: set,
    err: err,
    setErr: setErr,
    css: css,
    setCSS: setCSS
  };

  return [props, ref] as [subComponentProps, React.RefObject<HTMLInputElement>];
}
