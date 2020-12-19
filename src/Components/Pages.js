import React, { useState, useEffect, useContext } from 'react';
import DairyContext from './../Context/dairyContext';
import ColorContext from './../Context/colorContext';
import './../App.css';
import { SinglePost } from './index.js';
import { Spinner } from 'reactstrap';
import moment from 'moment';

export const Pages = (props) => {
  const { state, getPosts } = useContext(DairyContext);
  const { color } = useContext(ColorContext);
  const [loading, setLoading] = useState(true);
  let { posts } = state;
  if (props.filter === 'Today') {
    const filter = moment().format('D');
    posts = posts.filter((el) => {
      if (filter === moment(el.time).format('D')) return el;
      return null;
    });
  } else if (props.filter === '7 Days') {
    const filter = moment().subtract(7, 'days').format('D');
    posts = posts.filter((el) => {
      if (filter <= moment(el.time).format('D')) return el;
      return null;
    });
  } else if (props.filter === '1 Month') {
    const filter = moment().subtract(1, 'months').format('MM');
    posts = posts.filter((el) => {
      if (filter <= moment(el.time).format('MM')) return el;
      return null;
    });
  } else if (props.filter === '1 Year') {
    const filter = moment().subtract(1, 'years').format('YYYY');
    posts = posts.filter((el) => {
      if (filter <= moment(el.time).format('YYYY')) return el;
      return null;
    });
  }

  posts = posts.sort((a, b) => {
    if (a.time > b.time) return props.sort;
    else return -props.sort;
  });
  useEffect(() => {
    if (state.token !== '') getPosts(state.token);
    setLoading(false);
    // eslint-disable-next-line
  }, [state.token]);

  const setLoadingColor = () => {
    switch (color.text) {
      case 'text-blue-600':
        return 'primary';
      case 'text-pink-600':
        return 'danger';
      case 'text-green-600':
        return 'success';
      case 'text-yellow-600':
        return 'warning';
      case 'text-purple-600':
        return 'primary';
      default:
        break;
    }
  };
  return loading ? (
    <span className="flex mt-6 flex-col justify-center items-center ">
      <Spinner type="grow" color={setLoadingColor()} />
      <span className={`font-semibold capitalize tracking-wider ${color.text}`}>
        Loading
      </span>
    </span>
  ) : (
    <div className="page_content">
      {posts.length >= 1 ? (
        posts.map((el) => <SinglePost el={el} key={el._id} />)
      ) : (
        <span className="flex w-screen justify-center mt-3">
          <span
            className={`${color.text} capitalize font-semibold tracking-wider`}
          >
            no posts here...
          </span>
        </span>
      )}
    </div>
  );
};
