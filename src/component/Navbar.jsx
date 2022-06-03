import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const state = useSelector((state) => state.handleCart);

    console.log(state);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">

                {/* <a className="navbar-brand" href="#">eStore</a> */}
                <NavLink className={'navbar-brand mx-2'} to='/'>
                    <img src={'/assets/logo.png'} alt="Navbar Logo" width='57px' height='50px' />
                    <span>eStore</span>
                </NavLink>

                <button className="navbar-toggler mx-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse px-3" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="dashboard">Dashboard</NavLink>
                        </li>
                    </ul>

                    <div className="buttons">
                        <NavLink to="/login" className="btn btn-outline-dark">
                            <i className="fa fa-sign-in me-1"></i> Login
                        </NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-user-plus me-1"></i> Register
                        </NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;