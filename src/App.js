import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Addnote,
  Viewpage,
  Login,
  ViewPost,
  EditPost,
  Delete,
} from './Components';
import './App.css';
import Protected from './Protected';

function App() {
  return (
    <div className="home-container">
      <Switch>
        <Route path="/" exact component={Login} />
        <Protected path="/view_dairy" exact component={Viewpage} />
        <Protected path="/view_dairy/:id" exact component={ViewPost} />
        <Protected path="/add_note" exact component={Addnote} />
        <Protected path="/edit_note" exact component={EditPost} />
        <Protected path="/delete_note" exact component={Delete} />
      </Switch>
    </div>
  );
}

export default App;
