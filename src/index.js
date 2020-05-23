import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import counterReducer from './Store/reducers/counter';
import resultReducer from './Store/reducers/result';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  counterRoot: counterReducer,
  resultRoot: resultReducer
})

const logger = store => {
  return next => {
    return action => {
      console.log('Middleware dispatching...',action);
      const result = next(action);
      console.log('Middleware next state...',store.getState());
      return result;
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
