import React, { useEffect, useState } from 'react'

const Products = () => {

    const [products, setProducts] = useState([]);
    const [isComponentMounted, setIsComponentMounted] = useState(true);



    // fetch products from https://fakestoreapi.com/products
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=5', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Access-Control-Allow-Methods': '*'
                }
            })

            if (isComponentMounted) {
                setProducts(await response.clone().json());
            }

            return () => {
                setIsComponentMounted(false);
            }
        }

        getProducts();

    }, [isComponentMounted]);

    const product = (product) => {
        return (
            <div id="accordion" key={product.id} className='mt-1'>
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target={'#productCollapse' + product.id} aria-expanded="true" aria-controls="collapseOne">
                                {product.title.substring(0, 20) + '...'}
                            </button>
                        </h5>
                    </div>

                    <div id={'productCollapse' + product.id} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            {/* create row with product details */}
                            <div className='columns'>
                                <div className='column'>
                                    <h5>
                                        <strong>{product.title}</strong>
                                        <br />
                                        <button className='btn btn-sm btn-info mx-3'>Available</button>
                                        <button className='btn btn-sm btn-warning mx-3 mt-1'>Quantity: {Math.floor(Math.random() * 101)}</button>
                                    </h5>
                                    <div className='d-flex mt-3'>
                                        <p className='m-2'>
                                            description: {product.description}
                                        </p>
                                        <img className='m-3' src={product.image} alt='product' height={'200px'} width={'150px'} />
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
        );
    }

    return (
        <>
            {products.map(product)}
        </>
    )
}

export default Products;