import { createHashHistory  } from 'history';
import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware} from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import App from "./container/App";
import RootReducer from './reducer/RootReducer'

// Hash history is needed to start the URL at "/" instead of "file:///"
const history = createHashHistory();

let middleware = applyMiddleware(thunk, routerMiddleware(history));

// TODO: Remove for production builds
middleware = composeWithDevTools(middleware);

const store = createStore(RootReducer, middleware);

ReactDom.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));
