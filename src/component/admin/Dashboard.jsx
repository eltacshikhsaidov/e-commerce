import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFeedback } from '../../redux/action/listActions';
import Swal from 'sweetalert2';

const Dashboard = () => {

    const state = useSelector((state) => state.handleFeedback);
    const dispatch = useDispatch();

    const removeFeedbackFromState = (feedback) => {
        dispatch(removeFeedback(feedback));
        showMessage('Feedback deleted', 'success');
    }

    const feedbacks = (feedback) => {
        return (
            <tr key={feedback.id}>
                <td>{feedback.fullName}</td>
                <td>
                    <a href={'mailto:' + feedback.email}>
                        {feedback.email}
                    </a>
                </td>
                <td>
                    {feedback.message}
                </td>
                <td>
                    <button className='btn btn-sm btn-danger mx-3' onClick={() => removeFeedbackFromState(feedback)}><i className='fa fa-trash'></i></button>
                </td>
            </tr>
        );
    }




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
                                    12900
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
                                    12900
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
                                    12900
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
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Product Image</th>
                                <th>Product Category</th>
                                <th>Product Description</th>
                                <th>Product Quantity</th>
                                <th>Product Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* get all products from database */}
                            {/* display all products */}
                            <tr>
                                <td>1</td>
                                <td>Product 1</td>
                                <td>$100</td>
                                <td>
                                    <img src='/assets/product.png' alt='product' height='100px' width='100px' />
                                </td>
                                <td>Electronics</td>
                                <td>This is product 1</td>
                                <td>100</td>
                                <td>
                                    <span className='bg-info p-1 rounded text-white'>Available</span>
                                </td>
                                <td className='d-flex'>
                                    <button className='btn btn-sm btn-success mx-1' onClick={() => showMessage('Updated succesffully', 'success')}><i className='fa fa-edit'></i></button>
                                    <button className='btn btn-sm btn-danger'><i className='fa fa-trash'></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Product 2</td>
                                <td>$200</td>
                                <td>
                                    <img src='/assets/product.png' alt='product' height='100px' width='100px' />
                                </td>
                                <td>Electronics</td>
                                <td>This is product 2</td>
                                <td>200</td>
                                <td>
                                    <span className='bg-secondary p-1 rounded text-white'>Not available</span>
                                </td>
                                <td className='d-flex'>
                                    <button className='btn btn-sm btn-success mx-1' onClick={() => showMessage('Updated succesffully', 'success')}><i className='fa fa-edit'></i></button>
                                    <button className='btn btn-sm btn-danger'><i className='fa fa-trash'></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* show all orders */}
                <div className='col-md-12 mt-5'>
                    <h3>Orders</h3>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Order Name</th>
                                <th>Order Price</th>
                                <th>Order Image</th>
                                <th>Order Category</th>
                                <th>Order Description</th>
                                <th>Order Quantity</th>
                                <th>Order Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* get all orders from database */}
                            {/* display all orders */}
                            <tr>
                                <td>1</td>
                                <td>Order 1</td>
                                <td>$100</td>
                                <td>
                                    <img src='/assets/product.png' alt='product' height='100px' width='100px' />
                                </td>
                                <td>Electronics</td>
                                <td>This is product 1</td>
                                <td>100</td>
                                <td>Available</td>
                                <td className='d-flex'>
                                    <button className='btn btn-sm btn-success mx-1'><i className='fa fa-edit'></i></button>
                                    <button className='btn btn-sm btn-danger'><i className='fa fa-trash'></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Order 2</td>
                                <td>$200</td>
                                <td>
                                    <img src='/assets/product.png' alt='product' height='100px' width='100px' />
                                </td>
                                <td>Electronics</td>
                                <td>This is product 2</td>
                                <td>200</td>
                                <td>Available</td>
                                <td className='d-flex'>
                                    <button className='btn btn-sm btn-success mx-1'><i className='fa fa-edit'></i></button>
                                    <button className='btn btn-sm btn-danger'><i className='fa fa-trash'></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* show all users */}
                <div className='col-md-12 mt-5'>
                    <h3>Users</h3>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>User Phone</th>
                                <th>User Address</th>
                                <th>User Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* get all users from database */}
                            {/* display all users */}
                            <tr>
                                <td>1</td>
                                <td>User 1</td>
                                <td>
                                    <a href='mailto:e@gmail.com'>
                                        e@gmail.com
                                    </a>
                                </td>
                                <td>0123456789</td>
                                <td>
                                    <a href='/address1'>
                                        Address 1
                                    </a>
                                </td>
                                <td>Admin</td>
                                <td className='d-flex'>
                                    <button className='btn btn-sm btn-success mx-1'><i className='fa fa-edit'></i></button>
                                    <button className='btn btn-sm btn-danger'><i className='fa fa-trash'></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Show all feedbacks */}
                <div className='col-md-12 my-5'>
                    <h3>Feedbacks</h3>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Full name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* get all feedbacks from database */}
                            {/* display all feedbacks */}
                            {state.map(feedback => feedbacks(feedback))}
                            
                        </tbody>
                    </table>
                </div>





            </div>
        </div>
    )
}

export default Dashboard;