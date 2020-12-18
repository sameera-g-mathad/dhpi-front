import React, { useContext } from 'react';
import './../App.css';
import DairyContext from './../Context/dairyContext';
import { useHistory } from 'react-router-dom';
export const Navbar = () => {
  const history = useHistory();
  const { logout } = useContext(DairyContext);
  return (
    <div className="flex items-center justify-between px-2 tracking-widest bg-blue-200 home-nav">
      <span className="text-xl capitalize title">my diary</span>
      <span>
        <button
          onClick={() => {
            logout();
            history.push('/');
          }}
          className="font-semibold capitalize focus:outline-none"
        >
          sign out
        </button>
      </span>
    </div>
  );
};
