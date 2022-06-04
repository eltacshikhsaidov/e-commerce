import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2';

const Footer = () => {

    const { isAuthenticated } = useAuth0();


    // get real time scroll position
    const [scrollPosition, setScrollPosition] = React.useState(0)

    // get real time scroll position
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        setScrollPosition(window.scrollY)
    }

    const scrollToTopClick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    // show help alert
    const showHelpAlert = () => {
        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Help',
            text: 'If you have any question, message us on by clicking \n on the message icon on the bottom right corner.',
            showConfirmButton: true,
            // timer: 1500
        })
    }



    return (
        <footer className="text-center text-lg-start bg-light text-muted">

            {/* back to top button */}
            {scrollPosition > 100 &&
                <button
                    type="button"
                    className="btn btn-outline-dark btn-floating btn-lg rounded-circle"
                    id="btn-back-to-top"
                    onClick={scrollToTopClick}
                >
                    <i className="fa fa-arrow-up"></i>
                </button>
            }

            <section
                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href="/facebook/estore" className="me-4 text-reset">
                        <i className="fa fa-facebook-f"></i>
                    </a>
                    <a href="/twitter/estore" className="me-4 text-reset">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="/google/estore" className="me-4 text-reset">
                        <i className="fa fa-google"></i>
                    </a>
                    <a href="/instagram/estore" className="me-4 text-reset">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="/linkedin/estore" className="me-4 text-reset">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="/github/estore" className="me-4 text-reset">
                        <i className="fa fa-github"></i>
                    </a>
                </div>
            </section>
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 bg-white p-3 rounded">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fa fa-gem me-3"></i>eStore
                            </h6>
                            <p>
                                Buy anything with one click and order from home. We will deliver at your door step. We are here to help you.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <NavLink className="text-reset" to="products">Men's clothes</NavLink>
                            </p>
                            <p>
                                <NavLink className="text-reset" to="products">Women's clothes</NavLink>
                            </p>
                            <p>
                                <NavLink className="text-reset" to="products">Electronics</NavLink>
                            </p>
                            <p>
                                <NavLink className="text-reset" to="products">All</NavLink>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <NavLink className="text-reset" to="about">About</NavLink>
                            </p>
                            {
                                isAuthenticated &&
                                <p>
                                    <NavLink className="text-reset" to="contact">Contact</NavLink>
                                </p>
                            }
                            <p>
                                <NavLink className="text-reset" to="products">Products</NavLink>
                            </p>
                            <p>
                                <NavLink className="text-reset" to={'/'} onClick={showHelpAlert}>Help</NavLink>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fa fa-home me-3"></i> Baku, AZ 10012, Azerbaijan</p>
                            <p>
                                <i className="fa fa-envelope me-3"></i>
                                info@estore.com
                            </p>
                            <p><i className="fa fa-phone me-3"></i> + 994 55 979 76 38</p>
                            <p><i className="fa fa-print me-3"></i> + 994 70 260 62 86</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className="text-reset fw-bold" href="https://www.e-commerce.netlify.app/">eStore</a>
            </div>
        </footer>
    )
}

export default Footer;