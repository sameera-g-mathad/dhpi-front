import React, { useContext } from 'react';
import { Input, Navbar } from './index.js';
import './../App.css';

import ColorContext from './../Context/colorContext';
export const ViewPost = (props) => {
  const { color } = useContext(ColorContext);
  const { title, description } = props.history.location.state;
  return (
    <>
      <Navbar />
      <div className={`w-screen h-full ${color.bg}`}>
        <div className="px-2 add_note">
          <Input>
            <label
              className={`${color.text} text-lg font-semibold capitalize tracking-wider title`}
            >
              title :{' '}
            </label>
            <input
              className={`focus:outline-none  border-b-2 ${color.border} capitalize tracking-wider font-semibold`}
              type="text"
              placeholder="Trip to bengaluru"
              value={title}
              readOnly
            />
          </Input>
          <Input>
            <label
              className={`${color.text} text-lg font-semibold capitalize title`}
            >
              description :
            </label>
            <textarea
              className={`w-full focus:outline-none  border-b-2 ${color.border} capitalize tracking-wider font-semibold`}
              placeholder="can`t wait to visit again."
              value={description}
              readOnly
            />
          </Input>
        </div>
      </div>
    </>
  );
};
