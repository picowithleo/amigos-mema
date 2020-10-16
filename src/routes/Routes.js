import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Welcome from '../auth/Welcome';
import About from '../page/About';
import Account from '../page/Account';
import Discover from '../page/Discover';
import Discover1 from '../page/Discover1';
import Discover2 from '../page/Discover2';
import Help from '../page/Help';
import Home from '../page/Home';
import Information from '../page/Information';
import Learn from '../page/Learn';
import Learning from '../page/Learning';
import Learnpage1 from '../page/Learnpage1';
import Learnpage2 from '../page/Learnpage2';
import Mema from '../page/Mema';
import Profile from '../page/Profile';
import Rate from '../page/Rate';
import Reviewpage from '../page/Reviewpage';
import Setting from '../page/Setting';
import Translatepage from '../page/Translatepage';
import ProtectedRoute from '../routes/ProtectedRoute';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/welcome" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/welcome" component={Welcome} /> 

      {/* Home page related*/}
      <ProtectedRoute exact path="/home" component={Home} />
      <ProtectedRoute exact path="/Mema" component={Mema} />
      <ProtectedRoute exact path="/Translatepage" component={Translatepage} />
      <ProtectedRoute exact path="/learning" component={Learning} />
      <ProtectedRoute exact path="/review" component={Reviewpage} />

      {/* Learn page related */}
      <ProtectedRoute exact path="/learn" component={Learn} />
      <ProtectedRoute exact path="/learnpage1" component={Learnpage1} />
      <ProtectedRoute exact path="/learnpage2" component={Learnpage2} />

      {/* Discover page related */}
      <ProtectedRoute exact path="/discover" component={Discover} />
      <ProtectedRoute exact path="/Information" component={Information} />
      <ProtectedRoute exact path="/Discover1" component={Discover1} />
      <ProtectedRoute exact path="/Discover2" component={Discover2} />

      {/* Account page related */}
      <ProtectedRoute exact path="/profile" component={Profile} />
      <ProtectedRoute exact path="/account" component={Account} />
      <ProtectedRoute exact path="/setting" component={Setting} />
      <ProtectedRoute exact path="/about" component={About} />
      <ProtectedRoute exact path="/help" component={Help} />
      <ProtectedRoute exact path="/rate" component={Rate} />

    </Switch>

  );
}

export default Routes;
