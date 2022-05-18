// For adding product to cart

export const addProductToCart = (product) => {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: product
    };
}

// For deleting product from cart

export const deleteProductFromCart = (product) => {
    return {
        type: 'DELETE_PRODUCT_FROM_CART',
        payload: product
    };
}