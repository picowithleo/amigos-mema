import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
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

const Routes = () => {
  return (
    <Switch>

      <Redirect exact from="/" to="/login" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

      {/* Home page related*/}
      <Route exact path="/home" component={Home} />
      <Route exact path="/Mema" component={Mema} />
      <Route exact path="/Translatepage" component={Translatepage} />
      <Route exact path="/learning" component={Learning} />
      <Route exact path="/review" component={Reviewpage} />

      {/* Learn page related */}
      <Route exact path="/learn" component={Learn} />
      <Route exact path="/learnpage1" component={Learnpage1} />
      <Route exact path="/learnpage2" component={Learnpage2} />

      {/* Discover page related */}
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/Information" component={Information} />
      <Route exact path="/Discover1" component={Discover1} />
      <Route exact path="/Discover2" component={Discover2} />

      {/* Account page related */}
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/account" component={Account} />
      <Route exact path="/setting" component={Setting} />
      <Route exact path="/about" component={About} />
      <Route exact path="/help" component={Help} />
      <Route exact path="/rate" component={Rate} />

    </Switch>

  );
}

export default Routes;
