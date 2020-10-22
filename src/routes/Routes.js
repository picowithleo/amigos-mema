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
import Chinese from '../page/dictionary/list/Chinese';
import Japanese from '../page/dictionary/list/Japanese';
import Korean from '../page/dictionary/list/Korean';
import French from '../page/dictionary/list/French';
import Italian from '../page/dictionary/list/Italian';
import German from '../page/dictionary/list/German';

import CFood from '../page/dictionary/language/chinese/Food';
import CFont from '../page/dictionary/language/chinese/Font';
import CExperience from '../page/dictionary/language/chinese/Experience';
import CHistory from '../page/dictionary/language/chinese/History';
import CJob from '../page/dictionary/language/chinese/Job';
import CWeather from '../page/dictionary/language/chinese/Weather';
import CWeb from '../page/dictionary/language/chinese/Web';
import CStory from '../page/dictionary/language/chinese/Story';
import CThanks from '../page/dictionary/language/chinese/Thanks';
import CProduct from '../page/dictionary/language/chinese/Product';

import JFood from '../page/dictionary/language/japanese/Food';
import JFont from '../page/dictionary/language/japanese/Font';
import JExperience from '../page/dictionary/language/japanese/Experience';
import JHistory from '../page/dictionary/language/japanese/History';
import JJob from '../page/dictionary/language/japanese/Job';
import JWeather from '../page/dictionary/language/japanese/Weather';
import JWeb from '../page/dictionary/language/japanese/Web';
import JStory from '../page/dictionary/language/japanese/Story';
import JThanks from '../page/dictionary/language/japanese/Thanks';
import JProduct from '../page/dictionary/language/japanese/Product';

import KFood from '../page/dictionary/language/korean/Food';
import KFont from '../page/dictionary/language/korean/Font';
import KExperience from '../page/dictionary/language/korean/Experience';
import KHistory from '../page/dictionary/language/korean/History';
import KJob from '../page/dictionary/language/korean/Job';
import KWeather from '../page/dictionary/language/korean/Weather';
import KWeb from '../page/dictionary/language/korean/Web';
import KStory from '../page/dictionary/language/korean/Story';
import KThanks from '../page/dictionary/language/korean/Thanks';
import KProduct from '../page/dictionary/language/korean/Product';

import FFood from '../page/dictionary/language/french/Food';
import FFont from '../page/dictionary/language/french/Font';
import FExperience from '../page/dictionary/language/french/Experience';
import FHistory from '../page/dictionary/language/french/History';
import FJob from '../page/dictionary/language/french/Job';
import FWeather from '../page/dictionary/language/french/Weather';
import FWeb from '../page/dictionary/language/french/Web';
import FStory from '../page/dictionary/language/french/Story';
import FThanks from '../page/dictionary/language/french/Thanks';
import FProduct from '../page/dictionary/language/french/Product';

import GFood from '../page/dictionary/language/german/Food';
import GFont from '../page/dictionary/language/german/Font';
import GExperience from '../page/dictionary/language/german/Experience';
import GHistory from '../page/dictionary/language/german/History';
import GJob from '../page/dictionary/language/german/Job';
import GWeather from '../page/dictionary/language/german/Weather';
import GWeb from '../page/dictionary/language/german/Web';
import GStory from '../page/dictionary/language/german/Story';
import GThanks from '../page/dictionary/language/german/Thanks';
import GProduct from '../page/dictionary/language/german/Product';

import IFood from '../page/dictionary/language/italian/Food';
import IFont from '../page/dictionary/language/italian/Font';
import IExperience from '../page/dictionary/language/italian/Experience';
import IHistory from '../page/dictionary/language/italian/History';
import IJob from '../page/dictionary/language/italian/Job';
import IWeather from '../page/dictionary/language/italian/Weather';
import IWeb from '../page/dictionary/language/italian/Web';
import IStory from '../page/dictionary/language/italian/Story';
import IThanks from '../page/dictionary/language/italian/Thanks';
import IProduct from '../page/dictionary/language/italian/Product';


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
      <ProtectedRoute exact path="/learn/Chinese" component={Chinese} />
      <ProtectedRoute exact path="/learn/Japanese" component={Japanese} />
      <ProtectedRoute exact path="/learn/Korean" component={Korean} />
      <ProtectedRoute exact path="/learn/French" component={French} />
      <ProtectedRoute exact path="/learn/Italian" component={Italian} />
      <ProtectedRoute exact path="/learn/German" component={German} />

      <ProtectedRoute exact path="/learn/Chinese/food" component={CFood} />
      <ProtectedRoute exact path="/learn/Chinese/font" component={CFont} />
      <ProtectedRoute exact path="/learn/Chinese/experience" component={CExperience} />
      <ProtectedRoute exact path="/learn/Chinese/history" component={CHistory} />
      <ProtectedRoute exact path="/learn/Chinese/job" component={CJob} />
      <ProtectedRoute exact path="/learn/Chinese/weather" component={CWeather} />
      <ProtectedRoute exact path="/learn/Chinese/web" component={CWeb} />
      <ProtectedRoute exact path="/learn/Chinese/story" component={CStory} />
      <ProtectedRoute exact path="/learn/Chinese/thanks" component={CThanks} />
      <ProtectedRoute exact path="/learn/Chinese/product" component={CProduct} />

      <ProtectedRoute exact path="/learn/Japanese/food" component={JFood} />
      <ProtectedRoute exact path="/learn/Japanese/font" component={JFont} />
      <ProtectedRoute exact path="/learn/Japanese/experience" component={JExperience} />
      <ProtectedRoute exact path="/learn/Japanese/history" component={JHistory} />
      <ProtectedRoute exact path="/learn/Japanese/job" component={JJob} />
      <ProtectedRoute exact path="/learn/Japanese/weather" component={JWeather} />
      <ProtectedRoute exact path="/learn/Japanese/web" component={JWeb} />
      <ProtectedRoute exact path="/learn/Japanese/story" component={JStory} />
      <ProtectedRoute exact path="/learn/Japanese/thanks" component={JThanks} />
      <ProtectedRoute exact path="/learn/Japanese/product" component={JProduct} />


      <ProtectedRoute exact path="/learn/Korean/food" component={KFood} />
      <ProtectedRoute exact path="/learn/Korean/font" component={KFont} />
      <ProtectedRoute exact path="/learn/Korean/experience" component={KExperience} />
      <ProtectedRoute exact path="/learn/Korean/history" component={KHistory} />
      <ProtectedRoute exact path="/learn/Korean/job" component={KJob} />
      <ProtectedRoute exact path="/learn/Korean/weather" component={KWeather} />
      <ProtectedRoute exact path="/learn/Korean/web" component={KWeb} />
      <ProtectedRoute exact path="/learn/Korean/story" component={KStory} />
      <ProtectedRoute exact path="/learn/Korean/thanks" component={KThanks} />
      <ProtectedRoute exact path="/learn/Korean/product" component={KProduct} />

      <ProtectedRoute exact path="/learn/French/food" component={FFood} />
      <ProtectedRoute exact path="/learn/French/font" component={FFont} />
      <ProtectedRoute exact path="/learn/French/experience" component={FExperience} />
      <ProtectedRoute exact path="/learn/French/history" component={FHistory} />
      <ProtectedRoute exact path="/learn/French/job" component={FJob} />
      <ProtectedRoute exact path="/learn/French/weather" component={FWeather} />
      <ProtectedRoute exact path="/learn/French/web" component={FWeb} />
      <ProtectedRoute exact path="/learn/French/story" component={FStory} />
      <ProtectedRoute exact path="/learn/French/thanks" component={FThanks} />
      <ProtectedRoute exact path="/learn/French/product" component={FProduct} />

      <ProtectedRoute exact path="/learn/German/food" component={GFood} />
      <ProtectedRoute exact path="/learn/German/font" component={GFont} />
      <ProtectedRoute exact path="/learn/German/experience" component={GExperience} />
      <ProtectedRoute exact path="/learn/German/history" component={GHistory} />
      <ProtectedRoute exact path="/learn/German/job" component={GJob} />
      <ProtectedRoute exact path="/learn/German/weather" component={GWeather} />
      <ProtectedRoute exact path="/learn/German/web" component={GWeb} />
      <ProtectedRoute exact path="/learn/German/story" component={GStory} />
      <ProtectedRoute exact path="/learn/German/thanks" component={GThanks} />
      <ProtectedRoute exact path="/learn/German/product" component={GProduct} />

      <ProtectedRoute exact path="/learn/Italian/food" component={IFood} />
      <ProtectedRoute exact path="/learn/Italian/font" component={IFont} />
      <ProtectedRoute exact path="/learn/Italian/experience" component={IExperience} />
      <ProtectedRoute exact path="/learn/Italian/history" component={IHistory} />
      <ProtectedRoute exact path="/learn/Italian/job" component={IJob} />
      <ProtectedRoute exact path="/learn/Italian/weather" component={IWeather} />
      <ProtectedRoute exact path="/learn/Italian/web" component={IWeb} />
      <ProtectedRoute exact path="/learn/Italian/story" component={IStory} />
      <ProtectedRoute exact path="/learn/Italian/thanks" component={IThanks} />
      <ProtectedRoute exact path="/learn/Italian/product" component={IProduct} />

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
