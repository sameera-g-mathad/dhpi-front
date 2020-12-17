import React, { useState, useContext } from 'react';
import './../App.css';
import { Input } from './Input';
import DairyContext from './../Context/dairyContext';
export const Login = (props) => {
  const { login } = useContext(DairyContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (name.length > 5)
      login(name, password, () => {
        props.history.push('/view_dairy');
      });
    else setWarning('length of name must be greater than 5');
  };

  return (
    <div className="w-screen h-full bg-green-300 login">
      <div className="login-display">dfsa</div>
      <form className="mx-4 login-form">
        <Input>
          <label className="text-lg font-semibold tracking-wider capitalize">
            Your name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=""
            type="text"
            placeholder="Ex: John"
          />
          <span>{warning}</span>
        </Input>
        <Input>
          <label className="text-lg font-semibold tracking-wider capitalize">
            password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Input>
        <span className="flex justify-end my-2">
          <button
            type="submit"
            onClick={(e) => submit(e)}
            className="px-4 font-semibold tracking-wider capitalize"
          >
            login
          </button>
        </span>
      </form>
    </div>
  );
};
