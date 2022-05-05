import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import ButtonSpinner from '../Loading/ButtonSpinner';

const VerifyEmail = () => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const handleSendEmailVerification = async () => {
        await sendEmailVerification();
        error ? toast.error(error?.message) : toast.success("Email verification sent");
    }
    return (
        <div className="d-md-flex alert justify-content-around alert-warning alert-dismissible fade show" role="alert">
            <strong>Please verify your email</strong>
            <button onClick={handleSendEmailVerification} type="button" className="btn btn-primary btn-sm d-block ms-md-auto">Send Email Verification {sending && <ButtonSpinner />}</button>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default VerifyEmail;