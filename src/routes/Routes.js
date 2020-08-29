import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../page/Home';
import Profile from '../page/Profile';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Learn from '../page/Learn';
import Learnpage1 from '../page/Learnpage1';
import Learnpage2 from '../page/Learnpage2';

const Routes = () => {
  return (
    <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/home" component={Home} />
        <Route exact path="/learn" component={Learn} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/learnpage1" component={Learnpage1} />
        <Route exact path="/learnpage2" component={Learnpage2} />
      </Switch>

  );
}

export default Routes;
