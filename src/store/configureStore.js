import PouchDB from 'pouchdb-browser';
import {routerMiddleware} from 'react-router-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import RootReducer from '../reducer/RootReducer'
import thunk from 'redux-thunk';

export default function configureStore(history) {
    const db = new PouchDB('united-client-db');

    let middleware = applyMiddleware(thunk, routerMiddleware(history));

    // TODO: Remove for production builds
    middleware = composeWithDevTools(middleware);

    return createStore(RootReducer, middleware)
}