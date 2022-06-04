import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            {/* create beautiful not found page in bootstrap */}
            <div className="container">
                <div className="row m-5">
                    <div className="col-12">
                        <h1 className="display-1 text-center">404</h1>
                        <h1 className="display-4 text-center">Page Not Found</h1>
                        <p className="lead text-center">The page you are looking for does not exist.</p>

                        <div className="text-center">
                            <NavLink to="/" className="btn btn-outline-dark">
                                <i className="fa fa-home me-1"></i> Home
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;