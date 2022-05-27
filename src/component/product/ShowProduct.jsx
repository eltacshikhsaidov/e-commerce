import { NavLink } from "react-router-dom";

const ShowProduct = ({product, addProduct}) => {
    return (
        <>

            <div className="col-md-6">
                <img src={product.image} alt={product.title} height='400px' width='400px' />
            </div>
            <div className="col-md-6 bg-light-border">
                <h4 className='text-uppercase text-black-50'>
                    {product.category}
                </h4>
                <h1 className="display-5">
                    {product.title}
                </h1>
                <p className="lead fw-bolder">
                    Rating {product.rating && product.rating.rate}
                    <i className="fa fa-star" style={{ color: 'orange', marginLeft: 5 }}></i>
                </p>
                <div className="display-6 fw-bold my-4">
                    $ {product.price}
                </div>
                <div className="lead mb-3">
                    {product.description}
                </div>

                <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(product)}>
                    Add to cart
                </button>
                <NavLink to='/cart' className='btn btn-dark ms-2 px-3 py-2'>
                    Go to cart
                </NavLink>
            </div>

        </>
    );
}

export default ShowProduct;