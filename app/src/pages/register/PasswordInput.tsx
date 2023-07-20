import { forwardRef, useState, ChangeEvent, Ref } from 'react';
import { ZXCVBNResult } from 'zxcvbn';

interface Props {
  passwd: string;
  setpasswd: (value: string) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
// try to name this component
// PasswordInput:
export default forwardRef<HTMLInputElement, Props>((props, ref: Ref<HTMLInputElement>) => {
  const [errors, setErrors] = useState('');
  const [result, setResult] = useState<ZXCVBNResult | null>(null);

  const handlePasswordChange = async (event: ChangeEvent<HTMLInputElement>) => {
    props.setpasswd(event.target.value);
    const zxcvbn = await import('zxcvbn');
    setResult(zxcvbn.default(event.target.value));

    if (result)
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
      <p className="text-sm text-red-400 font-bold">{result?.feedback.warning}</p>
      {result?.feedback.suggestions.map((suggestion, index) => (
        <p className="text-sm" key={index}>
          {suggestion}
        </p>
      ))}
      <progress value={result?.guesses_log10} max={24} />
      {errors && <span className="ml-1 text-red-200">{errors}</span>}
      <br />
      <span className="font-bold">{`~${result ? Math.floor(Math.log2(result.guesses)) : ''}`}</span>
      <span> bits of entropy</span>
    </div>
  );
});