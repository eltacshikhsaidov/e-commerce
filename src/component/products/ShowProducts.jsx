import { NavLink } from "react-router-dom";
import React from 'react';

const ShowProducts = ({data, setFilter, filterProduct, filter}) => {

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
                                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy now</NavLink>
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