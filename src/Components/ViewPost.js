import React from 'react';
import { Input } from './index.js';
import './../App.css';
import { Link } from 'react-router-dom';
export const ViewPost = (props) => {
  const { title, description } = props.history.location.state;
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
            readOnly
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
            readOnly
          />
        </Input>
      </div>
    </div>
  );
};
