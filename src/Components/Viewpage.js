import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import DairyContext from '../Context/dairyContext';
import ColorContext from './../Context/colorContext';
import './../App.css';
import { Pages, Navbar } from './index';

export const Viewpage = () => {
  const { authenticated } = useContext(DairyContext);
  const { color } = useContext(ColorContext);
  const [sort, setSort] = useState(1);
  const [filter, setFilter] = useState('Today');
  useEffect(() => {
    authenticated();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <div className={`pr-2 ${color.bg} home-content`}>
        <div>
          <span className="flex justify-end items-center py-2">
            <span>
              <Link
                to="/add_note"
                className={`font-semibold text-black capitalize focus:outline-none ${color.text} title hover:no-underline hover:${color.text}`}
              >
                new thoughts ?
              </Link>
            </span>
            <span className="ml-2 flex">
              <span className="ml-2">
                <select
                  className={`font-semibold p-2 rounded-lg focus:outline-none tracking-wide capitalize ${color.text} w-32`}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option
                    value={'Today'}
                    className={`font-semibold tracking-wide capitalize ${color.text}`}
                  >
                    Today
                  </option>
                  <option
                    value={'7 Days'}
                    className={`font-semibold tracking-wide capitalize ${color.text}`}
                  >
                    this week
                  </option>
                  <option
                    className={`font-semibold tracking-wide capitalize ${color.text}`}
                    value={'1 Month'}
                  >
                    this month
                  </option>
                  <option
                    className={`font-semibold tracking-wide capitalize ${color.text}`}
                    value={'1 Year'}
                  >
                    this year
                  </option>
                </select>
              </span>
            </span>
            <span className="ml-2">
              <select
                onChange={(e) => setSort(e.target.value)}
                className={`font-semibold p-2 rounded-lg focus:outline-none tracking-wide capitalize ${color.text} `}
              >
                <option
                  value={1}
                  className={`font-semibold tracking-wide capitalize ${color.text}`}
                >
                  newest
                </option>
                <option
                  value={-1}
                  className={`font-semibold tracking-wide capitalize ${color.text} `}
                >
                  oldest
                </option>
              </select>
            </span>
          </span>
        </div>
        <Pages sort={sort} filter={filter} />
      </div>
    </>
  );
};
