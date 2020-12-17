import React, { createContext, useReducer } from 'react';
import axios from './../axios';
const DairyContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'logged':
      return { ...state, token: action.payload._id, name: action.payload.user };
    case 'posts':
      return { ...state, posts: [...action.payload] };
    default:
      return state;
  }
};
export const DairyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    token: '',
    name: '',
  });

  const authenticated = () => {
    const _id = JSON.parse(sessionStorage.getItem('token'));
    const user = JSON.parse(sessionStorage.getItem('name'));
    dispatch({ type: 'logged', payload: { _id, user } });
  };

  const login = async (name, password, navigate) => {
    try {
      const res = await axios.post('/', { name, password });
      const { _id, name: user } = res.data.user;

      if (res.status === 200) {
        dispatch({ type: 'logged', payload: { _id, user } });
        sessionStorage.setItem('token', JSON.stringify(_id));
        sessionStorage.setItem('name', JSON.stringify(name));
        navigate();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getPosts = async () => {
    try {
      const res = await axios.get('/view_dairy', { _id: state.token });

      const posts = res.data.posts.dairy;

      dispatch({ type: 'posts', payload: posts });
    } catch (err) {
      console.log(err.response.data);
    }
  };
  const addPosts = async (title, description, navigate) => {
    try {
      const res = await axios.post('/add_note', {
        _id: state.token,
        posts: { title, description },
      });
      if (res.status === 200) {
        navigate();
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };
  const deletePost = async (id) => {
    console.log(id, state.token);
    try {
      const res = await axios.patch('/view_dairy', {
        _id: state.token,
        dairy_id: id,
      });
      console.log(res);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <DairyContext.Provider
      value={{ state, addPosts, login, authenticated, getPosts, deletePost }}
    >
      {children}
    </DairyContext.Provider>
  );
};
export default DairyContext;
