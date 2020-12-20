import React from 'react';
import { Redirect } from 'react-router-dom';

export const Delete = () => {
  //To redirect after post is deleted for refreshing the page
  return <Redirect to="/view_dairy" />;
};
