import * as actionTypes from './action-types/actionTypes';

// For adding product to cart

export const addProductToCart = (product) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: product
    };
}


// For deleting product from cart

export const deleteProductFromCart = (product) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: product
    };
}

// For adding feedback
export const addFeedback = (feedback) => {
    return {
        type: actionTypes.ADD_FEEDBACK,
        payload: feedback
    };
}

//  remove feedback
export const removeFeedback = (feedback) => {
    return {
        type: actionTypes.REMOVE_FEEBACK,
        payload: feedback
    };
}