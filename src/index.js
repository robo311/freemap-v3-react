import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { createLogger } from 'redux-logger';
import 'fullscreen-api-polyfill';

import Main from 'fm3/components/Main';
import reducer from 'fm3/reducers';
import logics from 'fm3/logic';
import { mainLoadState } from 'fm3/actions/mainActions';
import { mapLoadState } from 'fm3/actions/mapActions';
import { trackViewerLoadState } from 'fm3/actions/trackViewerActions';
import history from 'fm3/history';
import handleLocationChange from 'fm3/locationChangeHandler';
import initAuthHelper from 'fm3/authHelper';
import 'fm3/fbLoader';
import 'fm3/modalShim';

import 'fm3/styles/global.scss';

const logicMiddleware = createLogicMiddleware(logics);
const middlewares = [logicMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middlewares));

logicMiddleware.addDeps({ storeDispatch: store.dispatch }); // see https://github.com/jeffbski/redux-logic/issues/63

initAuthHelper(store);

let appState;
try {
  appState = JSON.parse(localStorage.getItem('appState'));
} catch (e) {
  // ignore
}

if (appState) {
  if (appState.main) {
    store.dispatch(mainLoadState(appState.main));
  }
  if (appState.map) {
    store.dispatch(mapLoadState(appState.map));
  }
  if (appState.trackViewer) {
    store.dispatch(trackViewerLoadState(appState.trackViewer));
  }
}

history.listen(handleLocationChange.bind(undefined, store));

handleLocationChange(store, history.location);

if (window.self !== window.top) {
  document.body.classList.add('embedded');
}

render(
  <Provider store={store}>
    <Main />
  </Provider>
  ,
  document.getElementById('app'),
);
