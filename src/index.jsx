import { createHashHistory  } from 'history';
import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware} from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import App from "./container/App";
import RootReducer from './reducer/RootReducer'

const history = createHashHistory();

let middleware = applyMiddleware(createLogger, thunk, routerMiddleware(history));

middleware = composeWithDevTools(middleware);

const store = createStore(RootReducer, middleware);

ReactDom.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));
