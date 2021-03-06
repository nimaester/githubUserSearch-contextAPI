import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import User from "./Users";
import OneUser from "./OneUser";
import Alert from "./Alert";
import About from "./About";
import Home from "./Home";
import NotFound from "./NotFound";
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar github={"Github Finder"} />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={OneUser}/>
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
