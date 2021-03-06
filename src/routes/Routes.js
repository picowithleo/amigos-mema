import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Welcome from '../auth/Welcome';
import About from '../page/About';
import Account from '../page/Account';
import CData from '../page/dictionary/language/chinese/Data';
import CFood from '../page/dictionary/language/chinese/Food';
import CHealth from '../page/dictionary/language/chinese/Health';
import CHistory from '../page/dictionary/language/chinese/History';
import CJob from '../page/dictionary/language/chinese/Job';
import CProduct from '../page/dictionary/language/chinese/Product';
import CStory from '../page/dictionary/language/chinese/Story';
import CThanks from '../page/dictionary/language/chinese/Thanks';
import CWeather from '../page/dictionary/language/chinese/Weather';
import CWeb from '../page/dictionary/language/chinese/Web';
import FFamily from '../page/dictionary/language/french/Family';
import FFood from '../page/dictionary/language/french/Food';
import FHealth from '../page/dictionary/language/french/Health';
import FHistory from '../page/dictionary/language/french/History';
import FJob from '../page/dictionary/language/french/Job';
import FProduct from '../page/dictionary/language/french/Product';
import FStory from '../page/dictionary/language/french/Story';
import FThanks from '../page/dictionary/language/french/Thanks';
import FWeather from '../page/dictionary/language/french/Weather';
import FWeb from '../page/dictionary/language/french/Web';
import GFamily from '../page/dictionary/language/german/Family';
import GFilm from '../page/dictionary/language/german/Film';
import GJob from '../page/dictionary/language/german/Job';
import GMarket from '../page/dictionary/language/german/Market';
import GMoney from '../page/dictionary/language/german/Money';
import GPicture from '../page/dictionary/language/german/Picture';
import GProduct from '../page/dictionary/language/german/Product';
import GThanks from '../page/dictionary/language/german/Thanks';
import GWeather from '../page/dictionary/language/german/Weather';
import GWeb from '../page/dictionary/language/german/Web';
import IAir from '../page/dictionary/language/italian/Air';
import IBook from '../page/dictionary/language/italian/Book';
import IFont from '../page/dictionary/language/italian/Font';
import IFood from '../page/dictionary/language/italian/Food';
import IHand from '../page/dictionary/language/italian/Hand';
import IHistory from '../page/dictionary/language/italian/History';
import IJob from '../page/dictionary/language/italian/Job';
import IPiano from '../page/dictionary/language/italian/Piano';
import IThanks from '../page/dictionary/language/italian/Thanks';
import IWeb from '../page/dictionary/language/italian/Web';
import JHealth from '../page/dictionary/language/japanese/Health';
import JFilm from '../page/dictionary/language/japanese/Film';
import JFood from '../page/dictionary/language/japanese/Food';
import JHistory from '../page/dictionary/language/japanese/History';
import JJob from '../page/dictionary/language/japanese/Job';
import JProduct from '../page/dictionary/language/japanese/Product';
import JStory from '../page/dictionary/language/japanese/Story';
import JFamily from '../page/dictionary/language/japanese/Family';
import JWeather from '../page/dictionary/language/japanese/Weather';
import JWeb from '../page/dictionary/language/japanese/Web';
import KFamily from '../page/dictionary/language/korean/Family';
import KFont from '../page/dictionary/language/korean/Font';
import KFood from '../page/dictionary/language/korean/Food';
import KHistory from '../page/dictionary/language/korean/History';
import KCompany from '../page/dictionary/language/korean/Company';
import KProduct from '../page/dictionary/language/korean/Product';
import KStory from '../page/dictionary/language/korean/Story';
import KThanks from '../page/dictionary/language/korean/Thanks';
import KWeather from '../page/dictionary/language/korean/Weather';
import KWeb from '../page/dictionary/language/korean/Web';
import Chinese from '../page/dictionary/list/Chinese';
import French from '../page/dictionary/list/French';
import German from '../page/dictionary/list/German';
import Italian from '../page/dictionary/list/Italian';
import Japanese from '../page/dictionary/list/Japanese';
import Korean from '../page/dictionary/list/Korean';
import Discover from '../page/Discover';
import Discover1 from '../page/Discover1';
import Discover2 from '../page/Discover2';
import Help from '../page/Help';
import Home from '../page/Home';
import Information from '../page/Information';
import Learn from '../page/Learn';
import Learning from '../page/Learning';
import Mema from '../page/Mema';
import Profile from '../page/Profile';
import Rate from '../page/Rate';
import Reviewpage from '../page/Reviewpage';
import Setting from '../page/Setting';
import Communnity from '../page/Community';
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
      <ProtectedRoute exact path="/learn/Chinese/health" component={CHealth} />
      <ProtectedRoute exact path="/learn/Chinese/data" component={CData} />
      <ProtectedRoute exact path="/learn/Chinese/history" component={CHistory} />
      <ProtectedRoute exact path="/learn/Chinese/job" component={CJob} />
      <ProtectedRoute exact path="/learn/Chinese/weather" component={CWeather} />
      <ProtectedRoute exact path="/learn/Chinese/web" component={CWeb} />
      <ProtectedRoute exact path="/learn/Chinese/story" component={CStory} />
      <ProtectedRoute exact path="/learn/Chinese/thanks" component={CThanks} />
      <ProtectedRoute exact path="/learn/Chinese/product" component={CProduct} />

      <ProtectedRoute exact path="/learn/Japanese/food" component={JFood} />
      <ProtectedRoute exact path="/learn/Japanese/film" component={JFilm} />
      <ProtectedRoute exact path="/learn/Japanese/health" component={JHealth} />
      <ProtectedRoute exact path="/learn/Japanese/history" component={JHistory} />
      <ProtectedRoute exact path="/learn/Japanese/job" component={JJob} />
      <ProtectedRoute exact path="/learn/Japanese/weather" component={JWeather} />
      <ProtectedRoute exact path="/learn/Japanese/web" component={JWeb} />
      <ProtectedRoute exact path="/learn/Japanese/story" component={JStory} />
      <ProtectedRoute exact path="/learn/Japanese/family" component={JFamily} />
      <ProtectedRoute exact path="/learn/Japanese/product" component={JProduct} />


      <ProtectedRoute exact path="/learn/Korean/food" component={KFood} />
      <ProtectedRoute exact path="/learn/Korean/font" component={KFont} />
      <ProtectedRoute exact path="/learn/Korean/family" component={KFamily} />
      <ProtectedRoute exact path="/learn/Korean/history" component={KHistory} />
      <ProtectedRoute exact path="/learn/Korean/company" component={KCompany} />
      <ProtectedRoute exact path="/learn/Korean/weather" component={KWeather} />
      <ProtectedRoute exact path="/learn/Korean/web" component={KWeb} />
      <ProtectedRoute exact path="/learn/Korean/story" component={KStory} />
      <ProtectedRoute exact path="/learn/Korean/thanks" component={KThanks} />
      <ProtectedRoute exact path="/learn/Korean/product" component={KProduct} />

      <ProtectedRoute exact path="/learn/French/food" component={FFood} />
      <ProtectedRoute exact path="/learn/French/health" component={FHealth} />
      <ProtectedRoute exact path="/learn/French/family" component={FFamily} />
      <ProtectedRoute exact path="/learn/French/history" component={FHistory} />
      <ProtectedRoute exact path="/learn/French/job" component={FJob} />
      <ProtectedRoute exact path="/learn/French/weather" component={FWeather} />
      <ProtectedRoute exact path="/learn/French/web" component={FWeb} />
      <ProtectedRoute exact path="/learn/French/story" component={FStory} />
      <ProtectedRoute exact path="/learn/French/thanks" component={FThanks} />
      <ProtectedRoute exact path="/learn/French/product" component={FProduct} />

      <ProtectedRoute exact path="/learn/German/money" component={GMoney} />
      <ProtectedRoute exact path="/learn/German/family" component={GFamily} />
      <ProtectedRoute exact path="/learn/German/picture" component={GPicture} />
      <ProtectedRoute exact path="/learn/German/market" component={GMarket} />
      <ProtectedRoute exact path="/learn/German/job" component={GJob} />
      <ProtectedRoute exact path="/learn/German/weather" component={GWeather} />
      <ProtectedRoute exact path="/learn/German/web" component={GWeb} />
      <ProtectedRoute exact path="/learn/German/film" component={GFilm} />
      <ProtectedRoute exact path="/learn/German/thanks" component={GThanks} />
      <ProtectedRoute exact path="/learn/German/product" component={GProduct} />

      <ProtectedRoute exact path="/learn/Italian/food" component={IFood} />
      <ProtectedRoute exact path="/learn/Italian/font" component={IFont} />
      <ProtectedRoute exact path="/learn/Italian/air" component={IAir} />
      <ProtectedRoute exact path="/learn/Italian/history" component={IHistory} />
      <ProtectedRoute exact path="/learn/Italian/job" component={IJob} />
      <ProtectedRoute exact path="/learn/Italian/book" component={IBook} />
      <ProtectedRoute exact path="/learn/Italian/web" component={IWeb} />
      <ProtectedRoute exact path="/learn/Italian/piano" component={IPiano} />
      <ProtectedRoute exact path="/learn/Italian/thanks" component={IThanks} />
      <ProtectedRoute exact path="/learn/Italian/hand" component={IHand} />

      {/* Discover page related */}
      <ProtectedRoute exact path="/discover" component={Discover} />
      <ProtectedRoute exact path="/Information" component={Information} />
      <ProtectedRoute exact path="/Discover1" component={Discover1} />
      <ProtectedRoute exact path="/Discover2" component={Discover2} />
      <ProtectedRoute exact path="/community" component={Communnity} />

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
