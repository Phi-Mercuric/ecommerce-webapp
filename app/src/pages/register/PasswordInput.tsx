import { forwardRef, useState, ChangeEvent, Ref } from 'react';
import zxcvbn from 'zxcvbn';

interface Props {
  passwd: string;
  setpasswd: (value: string) => void;
}

export default forwardRef<HTMLInputElement, Props>((props, ref: Ref<HTMLInputElement>) => {
  const [errors, setErrors] = useState('');

  const result = zxcvbn(props.passwd);

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setpasswd(event.target.value);
    setErrors(Math.log2(result.guesses) < 22 ? 'Password is too weak' : '');
  };

  return (
    <div className="">
      <input
        type="password"
        value={props.passwd}
        onChange={handlePasswordChange}
        ref={ref}
        placeholder="Password"
        className="bg-transparent border-b border-gray-600 text-gray-300 mt-4"
      />
      <p className="text-sm text-red-400 font-bold">{result.feedback.warning}</p>
      {result.feedback.suggestions.map((suggestion, index) => (
        <p className="text-sm" key={index}>
          {suggestion}
        </p>
      ))}
      <progress value={result.guesses_log10} max={24} />
      {errors && <span className="ml-1 text-red-200">{errors}</span>}
      <br />
      <span className="font-bold">{`~${Math.floor(Math.log2(result.guesses))}`}</span>
      <span> bits of entropy</span>
    </div>
  );
});