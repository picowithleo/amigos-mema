import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../page/Home';
import Profile from '../page/Profile';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Learn from '../page/Learn';
import Discover from '../page/Discover';
import Learnpage1 from '../page/Learnpage1';
import Learnpage2 from '../page/Learnpage2';
import Mema from '../page/Mema';
import Translatepage from '../page/Translatepage';
import Discover1 from '../page/Discover1';
import Discover2 from '../page/Discover2';
import Information from '../page/Information';

const Routes = () => {
  return (
    <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/home" component={Home} />
        <Route exact path="/learn" component={Learn} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />        <Route exact path="/learnpage1" component={Learnpage1} />
        <Route exact path="/learnpage2" component={Learnpage2} />
        <Route exact path="/Mema" component={Mema} />
        <Route exact path="/Translatepage" component={Translatepage} />
        <Route exact path="/Discover1" component={Discover1} />
        <Route exact path="/Discover2" component={Discover2} />
        <Route exact path="/Information" component={Information} />
      </Switch>

  );
}

export default Routes;
