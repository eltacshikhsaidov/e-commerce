import * as actionTypes from '../action/action-types/actionTypes';

// handle feedback
const feedbacks = [];

const handleFeedback = (state = feedbacks, action) => {
    const feedback = action.payload;

    switch (action.type) {
        case actionTypes.ADD_FEEDBACK:
            return [...state, feedback];
        case actionTypes.REMOVE_FEEBACK:
            return state.filter(item => item.id !== feedback.id);
        default:
            return state;
    }
}

export default handleFeedback;