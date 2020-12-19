import React, { useEffect, useState, useContext } from 'react';
import './../App.css';
import { Input, Navbar } from './index.js';
import DairyContext from './../Context/dairyContext';
import ColorContext from './../Context/colorContext';

export const Addnote = (props) => {
  const { addPosts, authenticated } = useContext(DairyContext);
  const { color } = useContext(ColorContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  useEffect(() => {
    authenticated();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Navbar />
      <div className={`w-screen h-full ${color.bg}`}>
        <div className="px-2  add_note">
          <Input>
            <label
              className={`${color.text} text-lg font-semibold capitalize tracking-wider title`}
            >
              title :{' '}
            </label>
            <input
              className={`focus:outline-none  border-b-2 ${color.border} font-semibold capitalize tracking-wider`}
              type="text"
              placeholder="Trip to bengaluru"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Input>
          <Input>
            <label
              className={`${color.text} text-lg font-semibold capitalize title`}
            >
              description :
            </label>
            <textarea
              className={`w-full focus:outline-none  border-b-2 ${color.border} font-semibold capitalize tracking-wider`}
              placeholder="Can`t wait to visit again."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Input>
          <span className="flex justify-end my-2">
            <button
              onClick={() => {
                addPosts(title, description, () =>
                  props.history.push('/view_dairy')
                );
              }}
              className={`${color.text} px-4 font-semibold tracking-wider capitalize focus:outline-none`}
            >
              submit
            </button>
          </span>
        </div>
      </div>
    </>
  );
};
