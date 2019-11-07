import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import HomePage from "./routes/Homepage";
import CURDShow from "./routes/CURDShow";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/HomePage" component={HomePage} />
        <Route path="/CURDShow" component={CURDShow} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
