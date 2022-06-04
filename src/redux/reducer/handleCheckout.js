import * as actionTypes from '../action/action-types/actionTypes';

const data = [];

const handleCheckout = (state = data, action) => {
    const checkout = action.payload;

    switch (action.type) {
        case actionTypes.ADD_TO_CHECKOUT:
            return [...state, checkout];
        case actionTypes.REMOVE_FROM_CHECKOUT:
            return state.filter(item => item.id !== checkout.id);
        default:
            return state;
    }
}

export default handleCheckout;