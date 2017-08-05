// Actions
export const ADD_TRAINER = "ADD_TRAINER";
export const REMOVE_TRAINER = "REMOVE_TRAINER";
export const EDIT_TRAINER = "EDIT_TRAINER";

// Action Creators
export function addTrainer(trainer) {
    return {
        type: ADD_TRAINER,
        payload: {trainer}
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