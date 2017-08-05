import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import TrainerReducer from './TrainerReducer';

const RootReducer = combineReducers({
    trainers: TrainerReducer,
    router: routerReducer,
});

export default RootReducer;