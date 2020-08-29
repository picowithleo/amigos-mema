import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../page/Home';
import Profile from '../page/Profile';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Learn from '../page/Learn';
import Mema from '../page/Mema';
import Translatepage from '../page/Translatepage';

const Routes = () => {
  return (
    <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/home" component={Home} />
        <Route exact path="/learn" component={Learn} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/Mema" component={Mema} />
        <Route exact path="/Translatepage" component={Translatepage} />
        
      </Switch>

  );
}

export default Routes;
