import React, { useContext } from 'react';
import './../App.css';
import DairyContext from './../Context/dairyContext';
import { Settings } from './index';
import { useHistory } from 'react-router-dom';
import ColorContext from './../Context/colorContext';
export const Navbar = () => {
  const history = useHistory();
  const { logout } = useContext(DairyContext);
  const { color } = useContext(ColorContext);
  return (
    <div
      className={`flex items-center justify-between px-2 tracking-widest home-nav ${color.bg}`}
    >
      <span className={`text-xl font-bold ${color.text} capitalize title`}>
        my diary
      </span>
      <span className="flex justify-between items-center relative ">
        <span className="flex flex-col items-center justify-center mt-2 relative ">
          <div className="absolute h-0 m-2 right-4 flex flex-col">
            <Settings />
          </div>
        </span>
        <button
          onClick={() => {
            logout();
            history.push('/');
          }}
          className={`font-semibold capitalize focus:outline-none ${color.text}`}
        >
          sign out
        </button>
      </span>
    </div>
  );
};
