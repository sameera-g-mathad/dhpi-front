import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//to check wheter user has logged in or not when the url is changed manually
const Protected = ({ componnet: Component, ...rest }) => {
  const _id = JSON.parse(sessionStorage.getItem('token'));
  const user = JSON.parse(sessionStorage.getItem('name'));
  if (_id !== null && user !== null) return <Route {...rest} />;
  else return <Redirect to="/" />;
};
export default Protected;
