import { NavLink } from "react-router-dom";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import { addProductToCart, deleteProductFromCart } from "../../redux/action/listActions";

const ShowProducts = ({ data, setFilter, filterProduct, filter }) => {

    const { isAuthenticated } = useAuth0();
    const dispatch = useDispatch();

    const state = useSelector(state => state.handleCart);

    const generateQRCode = (product) => {

        const data = `Product name -> ${product.title}\n
                             Product price -> ${product.price}\n`;

        Swal.fire({
            title: product.title,
            imageUrl: 'https://api.qrserver.com/v1/create-qr-code/?data=' + data + '&amp;size=150x150',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "QR Code",
            animation: false,
            showConfirmButton: false,
            showCloseButton: true,
            allowOutsideClick: true,
            allowEscapeKey: false,
            allowEnterKey: false,
            focusConfirm: false,
            confirmButtonText: "",
            confirmButtonAriaLabel: "",
            confirmButtonColor: "",
        });
    }

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
                            <div className="card h-100 text-center p-4 fixed-card">
                                {/* share button on top-right corner */}
                                <div className="share-button">
                                    <button className="btn btn-outline-dark rounded-circle" onClick={() => generateQRCode(product)}>
                                        <i className="fa fa-share-alt"></i>
                                    </button>
                                </div>

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
                                    <button id={'like-' + product.id} className='btn btn-outline-danger ml-2 mx-2' onClick={() => {
                                        if (isAuthenticated) {


                                            const likeButton = document.querySelector(`#like-${product.id}`);
                                            let click = 0;

                                            state.map((item) => {
                                                if (item.id === product.id) {
                                                    if (click % 2 === 0) {
                                                        click = item.numberOfClicks;
                                                    } else {
                                                        click = item.numberOfClicks;
                                                    }
                                                }

                                                return click;
                                            })


                                            if (click % 2 === 0) {
                                                showMessage('Added to your wishlist', 'success');
                                                dispatch(addProductToCart(product));
                                                console.log('click from add to cart', click);
                                                likeButton.classList.remove('btn-outline-danger');
                                                likeButton.classList.add('btn-danger');

                                            } else {
                                                showMessage('Removed to your wishlist', 'info');
                                                dispatch(deleteProductFromCart(product));
                                                console.log('click from delete from cart', click);
                                                likeButton.classList.remove('btn-danger');
                                                likeButton.classList.add('btn-outline-danger');
                                            }

                                            // change color of current button on click


                                        }
                                        else {
                                            showLoginAlert();
                                        }
                                    }}>
                                        <i className="fa fa-heart"></i>
                                    </button>
                                    {/* add share button */}
                                    {/* <button className="btn btn-outline-dark ml-2" onClick={() => generateQRCode(product)}>
                                        <i className="fa fa-share-alt"></i>
                                    </button> */}
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