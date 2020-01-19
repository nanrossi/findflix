import React from "react";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  useRouteMatch 
} from "react-router-dom";

import Home from '../../containers/Home/index.js';
import FlixDetail from '../../containers/FlixDetail/index.js';

export default function RouterSwitch() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/flix">
            <DefaultTopic />
          </Route>
        </Switch>
    </Router>
  );
}

function DefaultTopic() {
  let { path } = useRouteMatch();

  return (
      <Switch>
        <Route exact path={path}>
          <Home />
        </Route>
        <Route path={`${path}/create`}>
          <FlixDetail />
        </Route>
      </Switch>
  );
}