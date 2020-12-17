import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import DairyContext from '../Context/dairyContext';
import './../App.css';
import { Pages } from './index';

export const Viewpage = () => {
  const { authenticated } = useContext(DairyContext);
  useEffect(() => {
    authenticated();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="px-2 bg-blue-400 home-content">
      <div>
        <span className="flex justify-end">
          <span>
            <Link
              to="/add_note"
              className="font-semibold text-black capitalize focus:outline-none"
            >
              new thoughts ?
            </Link>
          </span>
        </span>
      </div>
      <Pages />
    </div>
  );
};
