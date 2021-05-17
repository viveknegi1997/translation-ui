import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './Home'
import Footer from './Footer.js';
import MainNavbar from './Navbar'
import AboutUs from 'views/aboutus/AboutUs'
import ContactUs from 'views/contactus/ContactUs'
import PrivacyPolicy from 'views/privacypolicy/PrivacyPolicy'
import Comics from 'views/comics/Comics'


import Addsense from './Addsense';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as Constants from "constants/Constants";

function App() {
  return <>
    <div className="mainDiv">
      <Addsense />
      <MainNavbar />
      <div className="contentWrap">
        <Switch>
          <Route path={["/home", "/"]} exact component={Home} />
          <Route path={Constants.subdomains.comics} component={Comics} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
        </Switch>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  </>
}

export default App;
