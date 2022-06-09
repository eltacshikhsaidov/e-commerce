import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';


const Navbar = () => {

    // CONFIGURING LOGIN/LOGOUT BUTTON
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const { logout } = useAuth0();
    const { user } = useAuth0();

    const state = useSelector((state) => state.handleCart);

    console.log(state);

    // show logout success
    const logoutSuccess = () => {
        Swal.fire({
            icon: 'success',
            title: 'Logout Success',
            text: 'You have successfully logged out.',
            showConfirmButton: false,
            timer: 1500
        })

        setTimeout(() => {
            logout();
        }, 1500);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm fixed-top">

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

                        {
                            isAuthenticated &&
                            <li className="nav-item">
                                <NavLink className="nav-link" to="contact">Contact</NavLink>
                            </li>
                        }

                        {
                            isAuthenticated && user.email === 'eltac.shixseyidov250301@gmail.com' &&
                            <li className="nav-item">
                                <NavLink className="nav-link" to="dashboard">Dashboard</NavLink>
                            </li>
                        }

                    </ul>

                    {!isAuthenticated &&
                        <div className="buttons">

                            <button className="btn btn-outline-dark" onClick={() => loginWithRedirect()}>
                                <i className="fa fa-sign-in me-1"></i> Login
                            </button>

                        </div>
                    }

                    {isAuthenticated &&
                        <div className="buttons">

                            <div className="dropdown">
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={user.picture} alt="profile" className="rounded-circle mx-3" width="40px" height="40px" /> {user.given_name || user.name}
                                </button>
                                <div className="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton">
                                    {/* add email verified  */}
                                    <button className='dropdown-item text-info'>
                                        <i className="fa fa-user-circle me-1"></i> {user.given_name || user.name}
                                    </button>
                                    <button className='dropdown-item text-secondary' title={user.email}>
                                        <i className="fa fa-envelope me-1"></i> {user.email.substring(0, 4)}...
                                    </button>
                                    <button className='dropdown-item text-success'>
                                        {/* verified email */}
                                        <i className="fa fa-check-circle me-1"></i> Verified
                                    </button>

                                    <NavLink to="/cart" className="dropdown-item">
                                        <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
                                    </NavLink>

                                    <button className='dropdown-item text-danger' onClick={() => logoutSuccess()}>
                                        <i className="fa fa-sign-out me-1"></i> Logout
                                    </button>
                                </div>
                            </div>

                        </div>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar;