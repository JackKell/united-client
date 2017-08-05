import {createHashHistory} from 'history';
import React from "react";
import ReactDom from "react-dom";
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux';
import App from "./container/App";

import configureStore from './store/configureStore'

// Hash history is needed to start the URL at "/" instead of "file:///"
const history = createHashHistory();

const store = configureStore(history);

ReactDom.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));
