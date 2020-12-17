import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Addnote, Navbar, Viewpage, Login } from './Components';
import './App.css';
function App() {
  return (
    <div className="home-container">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/view_dairy" exact component={Viewpage} />
        <Route path="/add_note" exact component={Addnote} />
      </Switch>
    </div>
  );
}

export default App;
