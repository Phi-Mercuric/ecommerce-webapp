import { ChangeEvent, Ref, forwardRef } from "react";
import { subComponentProps, validateUname } from "./Lib";

// try to name this component
// UsernameInput:
export default forwardRef<HTMLInputElement, subComponentProps>((props, ref: Ref<HTMLInputElement>) => {

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
        ref={ref}
        value={props.val}
      />
      {props.err && <span className="ml-1 text-red-200">{props.err}</span>}
    </>
  )
});