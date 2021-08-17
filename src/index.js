import React from 'react';
import ReactDOM from 'react-dom';
import '././assets/css/index.css';
import '././assets/css/tab.scss';
import '././assets/css/NotFound.scss';
import '././assets/css/header.scss';
import '././assets/css/body.scss';
import '././assets/css/mobile.scss';
import '././assets/css/slide.scss';
import '././assets/css/ResultSearch.scss';
import '././assets/css/ProductSuggestion.scss';
import '././assets/css/ProdDetail.scss';
import '././assets/css/variable.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import reducers from './redux/reducers';
import mySaga from 'redux/sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
