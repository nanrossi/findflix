import React from "react";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";

import Home from '../../containers/Home/index.js';
import AddFlix from '../../containers/AddFlix/index.js';
import EditFlix from '../../containers/EditFlix/index.js';

export default function RouterSwitch() {
  return (
    <Router>
      <Switch>
        <Route path='/flix/create' component={AddFlix} />
        <Route path='/flix/:id' component={EditFlix} />
        <Route path='/flix' component={Home} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}