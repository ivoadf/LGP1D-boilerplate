import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Pages
import HelloWorld from './components/containers/hello.container';

export default (
  <Router>
    <div>
    <Route path="/" component={HelloWorld}/>
    </div>
  </Router>
);
