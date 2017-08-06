import {
    ADD_TRAINER,
    BATCH_ADD_TRAINERS,
    REMOVE_TRAINER,
    EDIT_TRAINER
} from '../action/TrainerAction';

const initialState = [];

const TrainerReducer = (state = initialState, action) => {
    const {type} = action;
    if (type === ADD_TRAINER) {
        const {trainer} = action.payload;
        return [...state, trainer];
    } else if (type === BATCH_ADD_TRAINERS) {
        const {trainers} = action.payload;
        return [...state, ...trainers];
    } else if (type === REMOVE_TRAINER) {
        const {trainer} = action.payload;
        return state.filter((currentTrainer) => currentTrainer.name !== trainer.name);
    } else if (type === EDIT_TRAINER) {
        const {trainer} = action.payload;
        return [...state.filter((currentTrainer) => currentTrainer.name !== trainer.name), trainer];
    } else {
        return state;
    }
};

export default TrainerReducer;
