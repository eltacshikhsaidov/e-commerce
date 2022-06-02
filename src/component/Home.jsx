import React from 'react'
import Products from './products/Products';

const Home = () => {
    return (
        <div className='hero'>

            {/* carousel in bootstrap */}

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="card bg-dark text-white border-0">
                            <img src="/assets/background.jpg" className="card-img" alt="Background Cover" height={'400px'} />
                            <div className="card-img-overlay d-flex flex-column justify-content-center">
                                <div className="container">
                                    <h5 className="card-title display-3 fw-bolder mb-0">Latest Products</h5>
                                    <p className="card-text lead fs-2">
                                        Check out all the trends <i className="fa fa-hand-o-down"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="card bg-dark text-white border-0">
                            <img src="/assets/background1.jpg" className="card-img" alt="Background Cover" height={'400px'} />
                            <div className="card-img-overlay d-flex flex-column justify-content-center">
                                <div className="container">
                                    <h5 className="card-title display-3 fw-bolder mb-0">Delivery is available</h5>
                                    <p className="card-text lead fs-2">
                                        order your products from home <i className="fa fa-hand-o-down"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="card bg-dark text-white border-0">
                            <img src="/assets/background2.jpg" className="card-img" alt="Background Cover" height={'400px'} />
                            <div className="card-img-overlay d-flex flex-column justify-content-center">
                                <div className="container">
                                    <h5 className="card-title display-3 fw-bolder mb-0">Trends of the year</h5>
                                    <p className="card-text lead fs-2">
                                        Check out all the trends <i className="fa fa-hand-o-down"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <Products />
        </div>
    )
}

export default Home;