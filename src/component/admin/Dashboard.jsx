import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFeedback, removeFromCheckout } from '../../redux/action/listActions';
import Swal from 'sweetalert2';
import Users from './Users';
import Products from './Products';

const Dashboard = () => {

    const state = useSelector((state) => state.handleFeedback);
    const dispatch = useDispatch();
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);

    // orders
    const ordersState = useSelector((state) => state.handleCheckout);
    console.log(ordersState);
    console.log('feedback state', state);

    const removeFeedbackFromState = (feedback) => {
        dispatch(removeFeedback(feedback));
        showMessage('Feedback deleted', 'success');
    }

    const removeOrderFromState = (order) => {
        dispatch(removeFromCheckout(order));
        showMessage('Order removed', 'success');
    }

    const feedbacks = (feedback) => {
        return (

            <div id='accrodion'>
                <div className="card">
                    <div className="card-header" id='hello'>
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#world" aria-expanded="true" aria-controls="collapseOne">
                                Feedback by {feedback.fullName}
                            </button>
                        </h5>
                    </div>

                    <div id='world' className="collapse show" aria-labelledby="headingOne" data-parent='#accordion'>
                        <div className="card-body">
                            <div className='columns'>
                                <div className='column'>
                                    <h5>
                                        Feedback sent by {feedback.email}
                                    </h5>
                                    <p>
                                        {feedback.message}
                                    </p>
                                    <button className='btn btn-sm btn-danger mx-3' onClick={() => removeFeedbackFromState(feedback)}><i className='fa fa-trash'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    const orderedProducts = (orderedProduct) => {
        return (
            <h5 key={orderedProduct.id}>
                {orderedProduct.title.substring(0, 15) + '...'}
                <button className='btn btn-sm btn-warning mx-3'>Quantity: {orderedProduct.quantity}</button>
            </h5>
        );
    }

    const orders = (order) => {
        return (
            <div id="accordion" key={order.id}>
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target={'#collapseOne1' + order.id} aria-expanded="true" aria-controls="collapseOne">
                                Order ID #{order.id} by {order.user.name}
                            </button>
                        </h5>
                    </div>

                    <div id={'collapseOne1' + order.id} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            {/* create row with product details */}
                            <div className='columns'>
                                <div className='column'>
                                    {order.cart.map(orderedProduct => orderedProducts(orderedProduct))}
                                    <div className='d-flex'>
                                        <p className='my-1'>
                                            Username: {order.fullName} <br></br>
                                            Phone: {order.phone} <br></br>
                                            Email: {order.email} <br></br>
                                            Address: {order.address} <br></br>

                                        </p>
                                        <img src={order.user.picture} alt='user' className='rounded-circle img-fluid' />
                                    </div>
                                    {/* product is available */}
                                    <div className='d-flex'>
                                        <button className='btn btn-sm btn-danger mx-3' onClick={() => removeOrderFromState(order)}>
                                            <i className='fa fa-trash mx-1'></i>
                                            Remove Order
                                        </button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    const getTotalUsers = () => {
        fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(data => {
                setTotalUsers(data.length);
            })
            .catch(err => console.log(err));
    }

    const getTotalProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setTotalProducts(data.length);
            })
            .catch(err => console.log(err));
    }

    

    getTotalUsers();
    getTotalProducts();



    const showMessage = (message, icon) => {
        Swal.fire({
            position: 'center',
            icon: icon,
            title: message,
            showConfirmButton: false,
            timer: 1500
        })
    }


    return (
        // create container for dashboard
        <div className='container'>
            <h1 className='mt-3'>Dashboard</h1>
            {/* create row */}
            <div className='row'>
                {/* divide row into four columns */}
                <div className='col-md-3 mt-1'>
                    <div className='card bg-primary'>
                        <div className='card-body d-flex'>
                            <div className="column">
                                <h5 className='card-title'>Total Users</h5>
                                <p className='card-text'>
                                    {/* get total users from database */}
                                    {/* display total users */}
                                    {totalUsers}
                                </p>
                            </div>
                            <div className="column my-1 mx-auto">
                                <i className='fa fa-users fa-3x text-white'></i>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='col-md-3 mt-1'>
                    <div className='card bg-success'>
                        <div className='card-body d-flex'>
                            <div className="column">
                                <h5 className='card-title'>Total Orders</h5>
                                <p className='card-text'>
                                    {/* get total users from database */}
                                    {/* display total users */}
                                    {ordersState.length}
                                </p>
                            </div>
                            <div className="column my-1 mx-auto">
                                <i className='fa fa-shopping-cart fa-3x text-white'></i>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='col-md-3 mt-1'>
                    <div className='card bg-secondary'>
                        <div className='card-body d-flex'>
                            <div className="column">
                                <h5 className='card-title'>Total Products</h5>
                                <p className='card-text'>
                                    {/* get total users from database */}
                                    {/* display total users */}
                                    {totalProducts}
                                </p>
                            </div>
                            <div className="column my-1 mx-auto">
                                <i className='fa fa-shopping-bag fa-3x text-white'></i>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='col-md-3 mt-1'>
                    <div className='card bg-warning'>
                        <div className='card-body d-flex'>
                            <div className="column">
                                <h5 className='card-title'>Total Visitors</h5>
                                <p className='card-text'>
                                    {/* get total users from database */}
                                    {/* display total users */}
                                    12900
                                </p>
                            </div>
                            <div className="column my-1 mx-auto">
                                <i className='fa fa-eye fa-3x text-white'></i>
                            </div>

                        </div>
                    </div>
                </div>

                {/* show all availabel products */}
                <div className='col-md-12 mt-5'>
                    <h3>Available Products</h3>
                    <Products />
                </div>

                {/* show all orders */}
                <div className='col-md-12 mt-5'>
                    <h3>Orders</h3>
                    {
                        ordersState.length > 0
                            ? ordersState.map(order => orders(order))
                            : <p>No orders available</p>

                    }
                </div>

                {/* show all users */}
                <div className='col-md-12 mt-5'>
                    <h3>Users</h3>
                    <div id="accordion">
                        <div className="card">
                            <div className="card-header" id="headingOne3">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne">
                                        Eltac Shikhsaidov
                                    </button>
                                </h5>
                            </div>

                            <div id="collapseOne3" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body">
                                    {/* create row with product details */}
                                    <div className='columns'>
                                        <div className='column'>
                                            <h5>
                                                Role <button className='btn btn-sm btn-warning mx-3'>ADMIN</button>
                                            </h5>
                                            <div className='d-flex m-3'>
                                                <p className='m-2'>

                                                    email: eltac.shixseyidov@gmail.com

                                                </p>
                                                <img className='rounded-circle' src='https://via.placeholder.com/50' alt='product' />
                                            </div>
                                            {/* product is available */}
                                            <div className='d-flex'>
                                                <button className='btn btn-sm btn-success mx-3'>update</button>
                                                <button className='btn btn-sm btn-danger mx-3'>remove</button>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Users />
                </div>

                {/* Show all feedbacks */}
                <div className='col-md-12 my-5'>
                    <h3>Feedbacks</h3>
                    {/* get all feedbacks from database */}
                    {/* display all feedbacks */}
                    {state.length > 0 ?
                        state.map(feedback => feedbacks(feedback))
                        :
                        <p>No feedbacks</p>
                    }
                </div>





            </div>
        </div>
    )
}

export default Dashboard;