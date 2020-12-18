import React, { useState, useContext } from 'react';
import './../App.css';
import { Input, Dairy } from './index';
import DairyContext from './../Context/dairyContext';
export const Login = (props) => {
  const { login } = useContext(DairyContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  return (
    <div className="w-screen h-screen bg-green-300 login">
      <div className="login-display ">
        <span className="flex flex-col ">
          <span className="flex justify-center">
            <span className="text-5xl capitalize title">my diary</span>
          </span>
          <span className="pt-6 flex justify-evenly ">
            <span>
              <Dairy />
            </span>
            <span className=" text-3xl font-semibold sub-title flex flex-wrap">
              The life of every person is like a diary in which he means to
              write one story, and writes another.
            </span>
          </span>
        </span>
      </div>
      <div className="mx-4 login-form">
        <Input>
          <label className="py-2 text-lg font-semibold tracking-wider capitalize">
            Your name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="py-2"
            type="text"
            placeholder="Ex: John"
          />
          <span>{warning}</span>
        </Input>
        <Input>
          <label className="py-2 text-lg font-semibold tracking-wider capitalize">
            password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="py-2"
          />
        </Input>
        <span className="flex py-2 justify-end my-2">
          <button
            onClick={() => {
              if (name.length > 5)
                login(name, password, () => {
                  props.history.push('/view_dairy');
                });
              else setWarning('length of name must be greater than 5');
            }}
            className="px-4 font-semibold tracking-wider capitalize"
          >
            login
          </button>
        </span>
      </div>
    </div>
  );
};
