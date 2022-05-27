import React from 'react';
import Swal from 'sweetalert2';

const Contact = () => {

    const showSuccess = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Message sent successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Questions?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/contact.png" alt="Contact Us" height="400px" width="600px" />
                    </div>
                    <div className="col-md 6">
                        <form onSubmit={e => e.preventDefault()}>
                            <div class="mb-3">
                                <label for="exampleInput" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleInput" placeholder='John Adams...' />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='examle:john@adams.org' />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Enter your message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-dark" onClick={showSuccess}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;