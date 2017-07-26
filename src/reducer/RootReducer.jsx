import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const RootReducer = combineReducers({
    router: routerReducer,
});

export default RootReducer;