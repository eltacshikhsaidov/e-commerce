import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { addProductToCart, deleteProductFromCart } from '../redux/action/listActions';

const Checkout = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.handleCart);

    const orderMessage = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank you for your order!\nYour order will be delivered in 3-5 business days.',
            showConfirmButton: true,
        })
    }

    const showMessage = (message, icon) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: icon,
            title: message
        })
    }

    const removeProduct = (product) => {
        dispatch(deleteProductFromCart(product));
        showMessage('Product removed from cart', 'info');
    }

    const addProduct = (product) => {
        dispatch(addProductToCart(product));
        showMessage('Product added to cart', 'success');
    }

    const quantity = (product) => {
        let quantity = 0;
        state.forEach(item => {
            if (item.id === product.id) {
                quantity = item.quantity;
            }
        }
        )
        return quantity;
    }

    const totalAmount = () => {
        let amount = 0;
        state.forEach(item => {
            amount += item.price * item.quantity;
        }
        )
        return amount;
    }

    const checkoutItems = (checkoutItem) => {
        return (
            <tr className='align-middle' key={checkoutItem.id}>
                <td>
                    <img className='mx-3 my-2' src={checkoutItem.image} alt={checkoutItem.title} height='100px' />
                </td>
                <td>{checkoutItem.price}</td>
                <td>
                    {/* {quantity(checkoutItem) === 1 && <button className="btn btn-outline-danger" onClick={() => removeProduct(checkoutItem)}>Remove</button>} */}
                    <button className="btn btn-outline-danger rounded-circle" onClick={() => removeProduct(checkoutItem)}>
                        <i className="fa fa-minus"></i>
                    </button>

                    <span className="mx-3">{quantity(checkoutItem)}</span>
                    <button className="btn btn-outline-success rounded-circle" onClick={() => addProduct(checkoutItem)}>
                        <i className="fa fa-plus"></i>
                    </button>


                </td>
                <td>{checkoutItem.price * quantity(checkoutItem)}</td>
            </tr>
        );
    }

    return (

        // creating checkout page
        <div className="container mt-5 mb-3">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-4 text-center">Checkout</h1>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="text-center">
                                        <i className="fa fa-shopping-cart mx-2"></i>
                                        Your Cart (total amount: {totalAmount()}$)
                                    </h3>
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {state.map(checkoutItem => checkoutItems(checkoutItem))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6">
                                            <h3>
                                                <i className="fa fa-truck mx-2"></i>
                                                Shipping
                                            </h3>
                                            <hr />
                                            <div className="form-group">
                                                <label>Full Name</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input type="text" className="form-control" />
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <h3>
                                                <i className="fa fa-credit-card mx-2"></i>
                                                Payment
                                            </h3>
                                            <hr />
                                            <div className="form-group">
                                                <label htmlFor='cardNumber'>Card Number</label>
                                                <input type="text" className="form-control" id='cardNumber' />
                                            </div>
                                            <div className="form-group">
                                                <label>Expiration Date</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>CVV</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            {/* billing zip code */}
                                            <div className="form-group">
                                                <label>Billing Zip Code</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        {/* creating order button */}
                                        <div className="d-flex justify-content-center mt-4">
                                            <button type='button' className="btn btn-outline-dark btn-lg px-5" onClick={orderMessage}>
                                                Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Checkout;