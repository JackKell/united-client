// Actions
export const ADD_TRAINER = "ADD_TRAINER";
export const BATCH_ADD_TRAINERS = "BATCH_ADD_TRAINERS";
export const REMOVE_TRAINER = "REMOVE_TRAINER";
export const EDIT_TRAINER = "EDIT_TRAINER";

// Action Creators
export function addTrainer(trainer) {
    return {
        type: ADD_TRAINER,
        payload: {trainer}
    }
}

export function batchAddTrainers(trainers) {
    return {
        type: BATCH_ADD_TRAINERS,
        payload: {trainers},
    }
}

export function removeTrainer(trainer) {
    return {
        type: REMOVE_TRAINER,
        payload: {trainer}
    }
}

export function updateTrainer(trainer) {
    return {
        type: EDIT_TRAINER,
        payload: {trainer}
    }
}