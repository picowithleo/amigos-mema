import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../page/Home';
import Profile from '../page/Profile';
import Login from '../auth/Login';

const Routes = () => {
  return (
    <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
      </Switch>

  );
}

export default Routes;
