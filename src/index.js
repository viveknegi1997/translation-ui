import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/App.js';

import './style.css';

import { BrowserRouter as Router} from 'react-router-dom';

//.js is default extention so we can remove it in filename aboe ./app.js

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

