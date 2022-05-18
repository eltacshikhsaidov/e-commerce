import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProductFromCart } from '../redux/action/index';

const Cart = () => {

    const state = useSelector((state) => state.addProductToCart);
    const dispatch = useDispatch();

    const cartProducts = (cartProduct) => {
        <div className="px-4 my-5 bg-light">
            <div className="container py-4">
                <button className="btn-close float-end" aria-label='Close'></button>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <h3>test</h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    }


    return (
        <>
            Products added to cart
        </>
        // {state.length === 0 && state.map(cartProducts)}
    )
}

export default Cart;