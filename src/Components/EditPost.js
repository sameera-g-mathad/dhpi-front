import React, { useState, useContext } from 'react';
import { Input } from './index.js';
import './../App.css';
import { Link } from 'react-router-dom';
import DairyContext from '../Context/dairyContext.js';
export const EditPost = (props) => {
  console.log(props.history.location.state);
  const { el, token } = props.history.location.state;
  const [title, setTitle] = useState(el.title);
  const [description, setDescription] = useState(el.description);
  const { editPosts } = useContext(DairyContext);

  return (
    <div className="w-screen h-full bg-green-300">
      <div className="px-2 border add_note">
        <Link to="/view_dairy">back</Link>
        <Input>
          <label className="text-lg font-semibold capitalize">title : </label>
          <input
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
              editPosts(token, el._id, { title, description }, () =>
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
