import PouchDB from 'pouchdb-browser';
import PouchMiddleware from 'pouch-redux-middleware'
import {routerMiddleware} from 'react-router-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import RootReducer from '../reducer/RootReducer'
import thunk from 'redux-thunk';
import {addTrainer, removeTrainer, updateTrainer, batchAddTrainers} from "../action/TrainerAction"

const initialState = {
    trainers: [],
};

export default function configureStore(history) {
    const db = new PouchDB('united-client-db');

    const pouchMiddleware = PouchMiddleware({
        path: "/trainers",
        db,
        actions: {
            insert: trainer => addTrainer(trainer),
            remove: trainer => removeTrainer(trainer),
            update: trainer => updateTrainer(trainer),
            batchInsert: trainers => batchAddTrainers(trainers)
        },
        initialBatchDispatched: err => { console.log(err) }
    });

    let middleware = applyMiddleware(thunk, routerMiddleware(history), pouchMiddleware);
    middleware = composeWithDevTools(middleware);

    return createStore(RootReducer, initialState, middleware);
}