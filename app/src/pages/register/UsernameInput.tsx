import Joi from "joi";
import { ChangeEvent, useState } from "react";
import subComponentProps from "./Lib";

export const validateUname = (uname: string) => {
  return Joi.string().min(3).max(30).required().validate(uname).error ? true : false;
}

export default (props: subComponentProps) => {

  const unameChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (validateUname(e.target.value)) {
      props.setErr('username must be at least 3 characters long');
      props.setCSS('border-red-500');
    } else {
      props.setErr('');
      props.setCSS('');
    }
    props.set(e.target.value);
  }

  return (
    <>
      <input type="username"
        placeholder="Username"
        className={`bg-transparent border-b ${props.css} text-gray-300 mt-4`}
        onChange={unameChange}
        ref={props.ref}
        value={props.val}
      />
      {props.err && <span className="ml-1 text-red-200">{props.err}</span>}
    </>
  )
}