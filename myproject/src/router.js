import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import App from "./App";
import Admin from './admin'
import Login from './page/login'
import Home from "./page/home";


export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/' render={() =>
              <Admin>
                <Route path="/home" component={Home} />
              </Admin>
            } />
          </Switch>
        </App>
      </BrowserRouter>
    )
  }
}