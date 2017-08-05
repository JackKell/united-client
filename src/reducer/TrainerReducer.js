import {
    ADD_TRAINER,
    REMOVE_TRAINER,
    EDIT_TRAINER
} from '../action/TrainerAction';

const initialState = [];

const TrainerReducer = (trainers = initialState, action) => {
    const {type} = action;
    if (type === ADD_TRAINER) {
        const {trainer} = action.payload;
        return [...trainers, trainer];
    } else if (type === REMOVE_TRAINER) {
        const {trainer} = action.payload;
        return trainers.filter((currentTrainer) => currentTrainer.name !== trainer.name);
    } else if (type === EDIT_TRAINER) {
        const {trainer} = action.payload;
        return [...trainers.filter((currentTrainer) => currentTrainer.name !== trainer.name), trainer];
    } else {
        return trainers;
    }
};

export default TrainerReducer;
