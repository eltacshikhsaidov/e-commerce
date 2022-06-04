import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../redux/action/listActions';
import Swal from 'sweetalert2';

const Contact = () => {

    const dispatch = useDispatch();

    const addFeedbackToState = (feedback) => {
        setFeedback({
            ...feedback,
            id: new Date().getTime(),
        })
        dispatch(addFeedback(feedback));
        showSuccess('Thank you for your message', 'success');
        setFeedback({
            fullName: '',
            email: '',
            message: '',
        })
    }

    const [feedback, setFeedback] = useState({
        id: 0,
        fullName: '',
        email: '',
        message: '',
    });

    console.log(feedback);

    // disable button if form is empty
    const disableButton = () => {
        if (feedback.fullName === '' || feedback.email === '' || feedback.message === '' || !isValidEmail(feedback.email)) {
            return true;
        } else {
            return false;
        }
    }

    // check is valid email
    const isValidEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const showSuccess = (message, icon) => {
        Swal.fire({
            position: 'center',
            icon: icon,
            title: message,
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
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">Full Name</label>
                                <input onChange={e => setFeedback({ ...feedback, fullName: e.target.value })} value={feedback.fullName} type="text" className="form-control" id="exampleInput" placeholder='John Adams...' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" onChange={e => setFeedback({ ...feedback, email: e.target.value })} value={feedback.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='examle:john@adams.org' />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your message</label>
                                <textarea onChange={e => setFeedback({ ...feedback, message: e.target.value })} value={feedback.message} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-dark" onClick={() => addFeedbackToState(feedback)} disabled={disableButton()}>
                                {disableButton() ? 'Please fill out all fields' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;