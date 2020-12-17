import React, { useEffect, useState, useContext } from 'react';
import './../App.css';
import { Input } from './index.js';
import DairyContext from './../Context/dairyContext';

export const Addnote = (props) => {
  const { addPosts, authenticated } = useContext(DairyContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  useEffect(() => {
    authenticated();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="w-screen h-full bg-green-300">
      <div className="px-2 border add_note">
        <span>New Page.</span>
        <Input>
          <label className="text-lg font-semibold capitalize">title : </label>
          <input
            className=""
            type="text"
            placeholder="Trip to bengaluru"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Input>
        <Input>
          <label className="text-lg font-semibold capitalize">
            description :
          </label>
          <textarea
            className="w-full"
            placeholder="can`t wait to visit again."
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
            className="px-4 font-semibold tracking-wider capitalize"
          >
            submit
          </button>
        </span>
      </div>
    </div>
  );
};
