import React from 'react';

import Chapter from './Chapter'
import Home from './Home'

import Header from './Header.js';
import Footer from './Footer.js';

import { BrowserRouter as  Switch, Route } from 'react-router-dom';
function App() {

  return <div>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/fidwtm" component={Chapter} />
    </Switch>
    <Footer />
  </div>
}

export default App;
