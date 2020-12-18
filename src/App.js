import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Addnote, Viewpage, Login, ViewPost, EditPost } from './Components';
import './App.css';
function App() {
  return (
    <div className="home-container">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/view_dairy" exact component={Viewpage} />
        <Route path="/view_dairy/:id" exact component={ViewPost} />
        <Route path="/add_note" exact component={Addnote} />
        <Route path="/edit_note" exact component={EditPost} />
      </Switch>
    </div>
  );
}

export default App;
