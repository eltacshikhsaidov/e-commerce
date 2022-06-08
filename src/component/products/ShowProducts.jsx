import { NavLink } from "react-router-dom";
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";

const ShowProducts = ({ data, setFilter, filterProduct, filter }) => {

    const { isAuthenticated } = useAuth0();

    const showLoginAlert = () => {
        Swal.fire({
            icon: 'info',
            title: 'Login Required',
            text: 'Please login to continue.',
            showConfirmButton: false,
            timer: 1500
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

    return (
        <>
            <div className="scroll-row buttons d-flex justify-content-center pb-5 mt-1">
                <button className="btn btn-outline-dark ms-1" onClick={() => setFilter(data)}>
                    All
                </button>
                <button className="btn btn-outline-dark ms-1" onClick={() => filterProduct('men\'s clothing')}>
                    Men's clothing
                </button>
                <button className="btn btn-outline-dark ms-1" onClick={() => filterProduct('women\'s clothing')}>
                    Women's clothing
                </button>
                <button className="btn btn-outline-dark ms-1 wp" onClick={() => filterProduct('jewelery')}>
                    Jewelery
                </button>
                <button className="btn btn-outline-dark ms-1 wp" onClick={() => filterProduct('electronics')}>
                    Electronic
                </button>
            </div>
            {filter.map((product) => {
                return (
                    <React.Fragment key={product.id}>
                        <div className="col-md-3 mb-4">
                            <div className="card h-100 text-center p-4">
                                <img src={product.image} className="card-img-top" alt={product.title} height='250px' />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                    {/* <p className="card-text mt-2">
                                        {product.description.substring(0, 50)}...
                                    </p> */}
                                    <p className="card-text lead fw-bold">
                                        ${product.price}
                                    </p>
                                    {
                                        isAuthenticated ?
                                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy now</NavLink>
                                            :
                                            <button className="btn btn-outline-dark" onClick={() => showLoginAlert()}>
                                                Buy now
                                            </button>
                                    }

                                    {/* adding like button for every product */}
                                    <button className="btn btn-outline-danger ml-2 mx-2" onClick={() => {
                                        if (isAuthenticated) {
                                            showMessage('Added to your wishlist', 'success');
                                        }
                                        else {
                                            showLoginAlert();
                                        }
                                    }}>
                                        <i className="fa fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                );
            })}
        </>
    );

}

export default ShowProducts;