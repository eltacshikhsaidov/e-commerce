import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { addProductToCart, addToCheckout, deleteProductFromCart } from '../redux/action/listActions';

const Checkout = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.handleCart);
    const { user } = useAuth0();
    const [total, setTotal] = useState(0);

    // add all data to state
    const [data, setData] = useState({
        id: new Date().getTime(),
        user: user,
        fullName: '',
        email: '',
        phone: '',
        address: '',
        cardNumber: '',
        cardExpiration: '',
        cardCvv: '',
        couponCode: '',
        total: 0,
        cart: state,
    });

    // console.log(data);

    const success = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank you for your order!\nYour order will be delivered in 3-5 business days.',
            showConfirmButton: true,
            // add button for showing map track a courier
            confirmButtonText: 'Show courier track',
            showCancelButton: true,
            cancelButtonText: 'Close',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    // show the map
                    title: 'Courier track',
                    html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.865010982409!2d106.7641833142898!3d-6.239959794909814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4f8f8f8f8f7%3A0x8f8f8f8f8f8f8f8f!2sJl.+Kartini+No.1%2C+Kec.+Cipadung%2C+Kota+Bandung%2C+Jawa+Barat+40351!5e0!3m2!1sid!2sid!4v1569240981250!5m2!1sid!2sid" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
                    showConfirmButton: false,
                    showCancelButton: true,
                    cancelButtonText: 'Close',


                })
            }
        });

        dispatch(addToCheckout(data));

        setData({
            id: new Date().getTime(),
            user: user,
            fullName: '',
            email: '',
            phone: '',
            address: '',
            cardNumber: '',
            cardExpiration: '',
            cardCvv: '',
            couponCode: '',
            total: 0,
            cart: state,
        });
    }

    const orderMessage = () => {

        !disableButton() ? success() : showMessage('Please fill all inputs', 'warning');

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
        })
        return quantity;
    }

    const totalAmount = () => {
        let amount = 0;
        state.forEach(item => {
            amount += item.price * item.quantity;
        })

        data.total = amount;
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
                <td>{checkoutItem.price.toFixed(2) * quantity(checkoutItem)}</td>
            </tr>
        );
    }

    // disable button is input is empty
    const disableButton = () => {
        if (data.fullName === '' || data.email === '' || data.phone === '' || data.address === '' || data.cardNumber === '' || data.cardExpiration === '' || data.cardCvv === '') {
            return true;
        } else {
            return false;
        }
    }

    // generate coupon code with letters and numbers
    const generateCouponCode = () => {
        // let couponCode = '';
        // let letters = 'ABCDEFGHJKMNPQRSTUVWXYZ';
        // let numbers = '123456789';
        // for (let i = 0; i < 3; i++) {
        //     couponCode += letters.charAt(Math.floor(Math.random() * letters.length));
        //     couponCode += numbers.charAt(Math.floor(Math.random() * numbers.length));
        // }
        return 'ALGORITMIKA';
    }

    // apply coupon code
    const applyCoupon = () => {
        if (data.couponCode === generateCouponCode()) {
            showMessage('10% discount applied', 'success');
            setTotal(totalAmount() * 0.9);
            data.total = totalAmount() * 0.9;

        } else {
            showMessage('Coupon code is not valid', 'error');
            setTotal(totalAmount());
        }
    }

    // is coupon code applied
    const isCouponApplied = () => {
        if (data.couponCode === generateCouponCode()) {
            return true;
        } else {
            return false;
        }
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
                                        Your Cart (total amount: {isCouponApplied() ? total.toFixed(2) : totalAmount().toFixed(2)}$)
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
                                                {/* add info for star */}
                                                <label>* Full Name</label>
                                                <input onChange={e => setData({ ...data, fullName: e.target.value })} value={data.fullName} type="text" className="form-control" />
                                            </div>
                                            <div className="form-group mt-2">
                                                <label>* Email</label>
                                                <input onChange={e => setData({ ...data, email: e.target.value })} value={data.email} type="email" className="form-control" />
                                            </div>
                                            <div className="form-group mt-2">
                                                <label>* Phone</label>
                                                <input onChange={e => setData({ ...data, phone: e.target.value })} value={data.phone} type="text" className="form-control" />
                                            </div>
                                            <div className="form-group mt-2">
                                                <label>* Address</label>
                                                <input onChange={e => setData({ ...data, address: e.target.value })} value={data.address} type="text" className="form-control" />
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <h3>
                                                <i className="fa fa-credit-card mx-2"></i>
                                                Payment
                                            </h3>
                                            <hr />
                                            <div className="form-group">
                                                <label htmlFor='cardNumber'>* Card Number</label>
                                                <input onChange={e => setData({ ...data, cardNumber: e.target.value })} value={data.cardNumber} type="text" className="form-control" id='cardNumber' />
                                            </div>
                                            <div className="form-group mt-2">
                                                <label>* Expiration Date</label>
                                                <input onChange={e => setData({ ...data, cardExpiration: e.target.value })} value={data.cardExpiration} type="text" className="form-control" />
                                            </div>
                                            <div className="form-group mt-2">
                                                <label>* CVV</label>
                                                <input onChange={e => setData({ ...data, cardCvv: e.target.value })} value={data.cardCvv} type="text" className="form-control" />
                                            </div>

                                            {/* coupon code */}
                                            <div className="form-group mt-2">
                                                <label><strong>Coupon Code</strong></label>
                                                <div className="d-flex">
                                                    <input onChange={e => setData({ ...data, couponCode: e.target.value })} value={data.couponCode} type="text" className="form-control" />
                                                    <button className="btn btn-outline-success mx-2" onClick={() => applyCoupon()}>
                                                        Apply
                                                    </button>
                                                </div>
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