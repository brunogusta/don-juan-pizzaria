import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from '../routes/history';

import reducers from './ducks';
import sagas from './sagas';


const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });


const middlewares = [
  sagaMiddleware,
  routerMiddleware(history),
];

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : compose(applyMiddleware(...middlewares));

const store = createStore(connectRouter(history)(reducers), composer);

sagaMiddleware.run(sagas);

export default store;
