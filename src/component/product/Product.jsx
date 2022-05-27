import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../redux/action/listActions';
import { useParams } from 'react-router-dom';
import ShowProduct from './ShowProduct';
import Loading from './Loading';
import Swal from 'sweetalert2';

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isComponentMounted, setIsComponentMounted] = useState(true);

    const showSuccess = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product added to cart',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addProductToCart(product));
        showSuccess();
    };

    useEffect(() => {
        const getProduct = async () => {
            
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);

            if (isComponentMounted) {
                setProduct(await response.clone().json());
                setLoading(false);
            }
            
            return () => {
                setIsComponentMounted(false);
            }
        }
        getProduct();
    }, [id]);

    return (
        <div className='container py-5'>
            <div className="row py-4">
                {loading ? <Loading /> : <ShowProduct product={product} addProduct={addProduct} key={product.id} />}
            </div>
        </div>
    )
}

export default Product;
