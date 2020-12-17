import React, { useState, useEffect, useContext } from 'react';
import DairyContext from './../Context/dairyContext';
import './../App.css';
import { SinglePost } from './index.js';

export const Pages = () => {
  const { state, getPosts } = useContext(DairyContext);
  const [loading, setLoading] = useState(true);
  const { posts } = state;

  useEffect(() => {
    getPosts();
    setLoading(false);
    // eslint-disable-next-line
  }, []);
  return loading ? (
    'loading'
  ) : (
    <div className="page_content">
      {posts.map((el) => (
        <SinglePost el={el} key={el._id} />
      ))}
    </div>
  );
};
