import React, { useRef, useState } from "react";

export interface subComponentProps {
  val: string,
  set: (value: string) => void,
  err: string,
  setErr: (value: string) => void,
  css: string,
  setCSS: (value: string) => void
}

export const newProps = () => {

  let ref = useRef<HTMLInputElement>(null);
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
