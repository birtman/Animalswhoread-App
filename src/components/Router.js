import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import App from "../App";
import Article from "./Article";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/article/:title" component={Article} />
    </Switch>
  </BrowserRouter>
);

export default Router;
