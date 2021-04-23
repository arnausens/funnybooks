import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import { Router, Switch, Route } from "react-router-dom";

import history from "./history";

import UsersStore from "./stores/UsersStore";

import "./style/main.scss";

import Home from "./components/home";
import CazaOgroContent from "./components/books/cazaOgroContent";
import Blog from "./components/blog/blog";
import SignUpPage from "./signup/SignUpPage";
import LoginPage from "./login/LoginPage";


function main() {
  ReactDOM.render(
    <Provider UsersStore={UsersStore}>
      <Router history={history}>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/elCazador' exact component={CazaOgroContent}/>
            <Route path='/blog' exact component={Blog}/>
            <Route path='/signUp' exact component={SignUpPage}/>
            <Route path='/login' exact component={LoginPage}/>
          </Switch>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
