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
      <ul>
        <li><Link to="/hello">Hello</Link></li>
      </ul>
    <Route path="/hello" component={HelloWorld}/>
  </div>
  </Router>
);
