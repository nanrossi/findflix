import React from "react";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";

import Home from '../../containers/Home';
import AddFlix from '../../containers/AddFlix';
import EditFlix from '../../containers/EditFlix';
import NotFound from "../../containers/NotFound";

export default function RouterSwitch() {
  return (
    <Router>
      <Switch>
        <Route path='/flix/create' component={AddFlix} />
        <Route path='/flix/:id' component={EditFlix} />
        <Route path='/flix' component={Home} />
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}