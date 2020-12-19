import React, { useState, useContext } from 'react';
import './../App.css';
import { Input, Dairy } from './index';
import DairyContext from './../Context/dairyContext';
import { AiFillSetting } from 'react-icons/ai';
export const Login = (props) => {
  const { state, login } = useContext(DairyContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  return (
    <div className={`w-screen h-screen ${state.bg} login`}>
      <button className="absolute top-0 m-2 right-4 focus:outline-none">
        <span className="text-2xl">
          <AiFillSetting
            className={`${state.text} transform hover:rotate-90 focus:rotate-90`}
          />
        </span>
      </button>
      <div className="login-display ">
        <span className="flex flex-col ">
          <span className="flex justify-center">
            <span className={`pb-4 text-5xl ${state.text} capitalize title`}>
              my diary
            </span>
          </span>
          <span className="hidden pt-6 justify-evenly md:flex">
            <span>
              <Dairy />
            </span>
            <span
              className={`flex flex-wrap text-3xl font-semibold ${state.text} sub-title`}
            >
              The life of every person is like a diary in which he means to
              write one story, and writes another.
            </span>
          </span>
        </span>
      </div>
      <div className="mx-4 login-form">
        <Input>
          <label
            className={`py-2 text-lg font-semibold tracking-wider ${state.text} capitalize`}
          >
            Your name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`py-2 focus:outline-none`}
            type="text"
            placeholder="Ex: John"
          />
          <span>{warning}</span>
        </Input>
        <Input>
          <label
            className={`py-2 text-lg font-semibold tracking-wider ${state.text} capitalize`}
          >
            password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className={`py-2 focus:outline-none`}
          />
        </Input>
        <span className="flex justify-end py-2 my-2">
          <button
            onClick={() => {
              if (name.length > 5)
                login(name, password, () => {
                  props.history.push('/view_dairy');
                });
              else setWarning('length of name must be greater than 5');
            }}
            className={`px-4 font-semibold tracking-wider capitalize ${state.text} focus:outline-none`}
          >
            login
          </button>
        </span>
      </div>
    </div>
  );
};
