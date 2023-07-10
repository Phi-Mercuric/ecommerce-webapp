import { ChangeEvent, Ref, forwardRef } from "react";
import isEmail from 'email-validator'
import { subComponentProps } from "./Lib";

export const validateEmail = (email: string) => {
  return isEmail.validate(email);
}
export default forwardRef<HTMLInputElement, subComponentProps>((props, ref: Ref<HTMLInputElement>) => {

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.set(e.target.value);
    if (validateEmail(e.target.value)) {
      props.setErr('')
      props.setCSS('');
    } else {
      props.setErr('Enter a valid Email');
      props.setCSS('border-red-500');
    }
  }

  return (
    <>
      <input type="email"
        placeholder="Email"
        className={`bg-transparent border-b ${props.css} text-gray-300 mt-4`}
        onChange={onEmailChange}
        value={props.val}
        ref={ref}
      />
      {props.err && <span className="ml-1 text-red-200">{props.err}</span>}
    </>
  )
});