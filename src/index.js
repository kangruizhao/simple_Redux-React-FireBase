import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import logger from './logger'
import { createStore,applyMiddleware  } from "redux";
import { Provider } from "react-redux";
import promiseMiddleware from 'redux-promise';
import reducers from "./reducers";
import reduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import ReduxPromise from "redux-promise";
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <App /></Provider>, document.getElementById('root'));
registerServiceWorker();
