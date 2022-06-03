import React from 'react'

const Register = () => {
    return (
        <section className="container mt-4">
            <div className="row content d-flex justify-content-center">
                <div className="col-md-5">
                    <div className="box shadow bg-white p-4">
                        <h3 className="display-6 fw-bolder text-center mb-4">
                            Register
                        </h3>
                        <form action="" className="mb-3">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control rounded-0" placeholder="john" id='floatingInput' />
                                <label htmlFor="floatingInput">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control rounded-0" placeholder="name@example.com" id='floatingEmail' />
                                <label htmlFor="floatingEmail">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control rounded-0" placeholder="password" id='floatingPassword' />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="d-grid gap-2 mb-3">
                                <button type='button' className="btn btn-outline-dark btn-lg">
                                    Register
                                </button>
                            </div>
                            {/* sign in with social media accounts */}
                            <div className="text-center mt-3">

                                <span className="text-muted">Sign up with</span>

                                <div className="d-flex justify-content-center mt-2">
                                    <button type='button' className="btn btn-outline-dark btn-lg mx-1">
                                        <i className="fa fa-facebook-f"></i>
                                    </button>
                                    <button type='button' className="btn btn-outline-dark btn-lg mx-1">
                                        <i className="fa fa-google"></i>
                                    </button>
                                    <button type='button' className="btn btn-outline-dark btn-lg mx-1">
                                        <i className="fa fa-twitter"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;