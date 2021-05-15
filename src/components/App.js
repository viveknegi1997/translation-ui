import React from 'react';

import Chapter from './Chapter'
import Home from './Home'

import Header from './Header.js';
import Footer from './Footer.js';



import { Switch, Route } from 'react-router-dom';
import Addsense from './Addsense';

function App() {

  return <>
    <div className="mainDiv">
      <Addsense />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/fidwtm" component={Chapter} />
      </Switch>
      <Footer />
    </div>
  </>
}

export default App;
