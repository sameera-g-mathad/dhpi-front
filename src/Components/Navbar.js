import React from 'react';
import './../App.css';
export const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-2 tracking-widest bg-blue-200 home-nav">
      <span className="text-xl capitalize title">my diary</span>
      <span>
        <button className="font-semibold capitalize focus:outline-none">
          sign out
        </button>
      </span>
    </div>
  );
};
