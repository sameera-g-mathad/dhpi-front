import React, { useState, useContext } from 'react';
import './../App.css';
import { Input, Dairy, Settings } from './index';
import DairyContext from './../Context/dairyContext';
import ColorContext from './../Context/colorContext';
//import { AiFillSetting } from 'react-icons/ai';
export const Login = (props) => {
  const { login } = useContext(DairyContext);
  const { color } = useContext(ColorContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  return (
    <>
      <div className="absolute top-4 m-2 right-4 flex flex-col">
        <Settings />
      </div>
      <div className={`w-screen h-screen ${color.bg} login`}>
        <div className="login-display ">
          <span className="flex flex-col ">
            <span className="flex justify-center">
              <span className={`pb-4 text-5xl ${color.text} capitalize title`}>
                my diary
              </span>
            </span>
            <span className="hidden pt-6 justify-evenly md:flex">
              <span>
                <Dairy />
              </span>
              <span
                className={`flex flex-wrap text-3xl font-semibold ${color.text} sub-title`}
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
              className={`py-2 text-lg font-semibold tracking-wider ${color.text} capitalize`}
            >
              Your name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`py-2 focus:outline-none  border-b-2 ${color.border} capitalize tracking-wider font-semibold`}
              type="text"
              placeholder="Ex: John"
            />
            <span className="capitalize text-red-500 font-semibold">
              {warning}
            </span>
          </Input>
          <Input>
            <label
              className={`py-2 text-lg font-semibold tracking-wider ${color.text} capitalize`}
            >
              password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className={`py-2 focus:outline-none  border-b-2 ${color.border} capitalize tracking-wider font-semibold`}
            />
          </Input>
          <span className="flex justify-end py-2 my-2">
            <button
              disabled={
                password !== '123456789' || name.length < 5 ? true : false
              }
              onClick={() => {
                if (name.length > 5)
                  login(name.toLocaleLowerCase(), password, () => {
                    props.history.push('/view_dairy');
                  });
                else setWarning('characters must be greater than 5');
              }}
              className={`px-4 font-semibold tracking-wider capitalize ${color.text} focus:outline-none`}
            >
              login
            </button>
          </span>
        </div>
      </div>
    </>
  );
};
