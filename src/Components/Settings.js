import React, { useContext, useState } from 'react';
import ColorContext from './../Context/colorContext';
import { AiFillSetting } from 'react-icons/ai';

export const Settings = () => {
  const { color, changeTheme, darkTheme } = useContext(ColorContext);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="absolute right-0 -top-4">
        <button
          className=" focus:outline-none  "
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl">
            <AiFillSetting
              className={`${color.text} transform hover:rotate-90 focus:rotate-90`}
            />
          </span>
        </button>
      </div>
      <span
        style={{ display: open ? 'block' : 'none' }}
        className={`mt-2 w-40 p-2 border-2 ${color.border} ${color.bg} h-24 shadow-md rounded-lg`}
      >
        <span
          className={`${color.text} flex justify-between items-center font-semibold capitalize tracking-wider`}
        >
          dark mode
          <button
            className={`bg-gray-800 h-4 w-4 rounded-full focus:outline-none border-2 ${color.border}`}
            onClick={(e) => {
              darkTheme();
              setOpen(false);
            }}
          ></button>
        </span>
        <span className="flex flex-col">
          <span
            className={`${color.text} font-semibold capitalize py-2 tracking-wider`}
          >
            theme
          </span>
          <span className="flex justify-around">
            <button
              onClick={() => {
                changeTheme('blue');
                setOpen(false);
              }}
              className={`bg-blue-500 h-4 w-4 rounded-full focus:outline-none`}
            ></button>
            <button
              onClick={() => {
                changeTheme('pink');
                setOpen(false);
              }}
              className={`bg-pink-500 h-4 w-4 rounded-full focus:outline-none`}
            ></button>
            <button
              onClick={() => {
                changeTheme('green');
                setOpen(false);
              }}
              className={`bg-green-500 h-4 w-4 rounded-full focus:outline-none`}
            ></button>
            <button
              onClick={() => {
                changeTheme('purple');
                setOpen(false);
              }}
              className={`bg-purple-500 h-4 w-4 rounded-full focus:outline-none`}
            ></button>
          </span>
        </span>
      </span>
    </>
  );
};
