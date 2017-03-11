import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import router from './router';
import { Provider } from 'react-redux';

ReactDOM.render((
  <Provider store={store}>{router}</Provider>
), document.getElementById('root'));
