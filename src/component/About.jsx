import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {

    const { isAuthenticated } = useAuth0();

    return (
        <div>
            <div className="container py-2 my-2">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='text-dark fw-bold mb-4'>About us</h1>
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque euismod, urna eu tincidunt consectetur,
                            nisi nisl aliquam nunc, eget egestas nunc ipsum eu
                            lectus.
                            loerm ipsum dolor sit amet, consectetur adipiscing elit.
                            loerm ipsum dolor sit amet, consectetur adipiscing elit.
                            loerm ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                        {
                            isAuthenticated &&
                            <NavLink to={'/contact'} className="btn btn-outline-dark px-3">Contact us</NavLink>
                        }

                    </div>
                    <div className="col-md-6 my-5 d-flex justify-content-center">
                        <img className='img-fluid' src="/assets/about.png" alt="about" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;