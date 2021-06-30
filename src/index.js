import React from 'react';
import ReactDOM from 'react-dom';
import '././assets/css/index.css';
import '././assets/css/tab.scss';
import '././assets/css/header.scss';
import '././assets/css/slide.scss';
import '././assets/css/variable.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store/store';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
