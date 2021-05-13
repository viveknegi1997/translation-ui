import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/App.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './style.css';

//.js is default extention so we can remove it in filename aboe ./app.js

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header />
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

