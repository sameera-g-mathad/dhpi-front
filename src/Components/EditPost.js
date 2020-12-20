import React, { useState, useContext } from 'react';
import { Input, Navbar } from './index.js';
import './../App.css';

import DairyContext from '../Context/dairyContext.js';
import ColorContext from './../Context/colorContext';

export const EditPost = (props) => {
  //getting token(id) and individual element from Link
  const { el, token } = props.history.location.state;
  const [title, setTitle] = useState(el.title);
  const [description, setDescription] = useState(el.description);
  const [warning, setWarinig] = useState('');
  const { editPosts } = useContext(DairyContext);
  const { color } = useContext(ColorContext);

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
              className={`w-full focus:outline-none  border-b-2 ${color.border} capitalize tracking-wider font-semibold`}
              placeholder="can`t wait to visit again."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Input>
          <span className="font-semibold tracking-wide text-red-500 capitalize">
            {warning}
          </span>
          <span className="flex justify-end my-2">
            <button
              onClick={() => {
                if (title !== '' && description !== '')
                  editPosts(token, el._id, { title, description }, () =>
                    props.history.push('/view_dairy')
                  );
                else setWarinig('title and description cannot be empty');
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
