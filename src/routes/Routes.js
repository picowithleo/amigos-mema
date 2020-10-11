import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Discover from '../page/Discover';
import Discover1 from '../page/Discover1';
import Discover2 from '../page/Discover2';
import Home from '../page/Home';
import Information from '../page/Information';
import Learn from '../page/Learn';
import Learnpage1 from '../page/Learnpage1';
import Learnpage2 from '../page/Learnpage2';
import Mema from '../page/Mema';
import Profile from '../page/Profile';
import Translatepage from '../page/Translatepage';
import ProtectedRoute from '../routes/ProtectedRoute';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <ProtectedRoute exact path="/home" component={Home} />
      <ProtectedRoute exact path="/learn" component={Learn} />
      <ProtectedRoute exact path="/profile" component={Profile} />
      <ProtectedRoute exact path="/discover" component={Discover} />
      <ProtectedRoute exact path="/learnpage1" component={Learnpage1} />
      <ProtectedRoute exact path="/learnpage2" component={Learnpage2} />
      <ProtectedRoute exact path="/Mema" component={Mema} />
      <ProtectedRoute exact path="/Translatepage" component={Translatepage} />
      <ProtectedRoute exact path="/Discover1" component={Discover1} />
      <ProtectedRoute exact path="/Discover2" component={Discover2} />
      <ProtectedRoute exact path="/Information" component={Information} />
    </Switch>

  );
}

export default Routes;
