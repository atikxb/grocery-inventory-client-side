import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import ButtonSpinner from '../Loading/ButtonSpinner';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    console.log(user?.user?.displayName);
    const [sendPasswordResetEmail, sending, emailError] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useEffect(() => {//used useEffect to wait till currentUser and avoid browser router error
        token && navigate(from, { replace: true });
    }, [token, from, navigate]);
    const handleLogin = async e => {
        e.preventDefault();
        await signInWithEmailAndPassword(email, password);
    }
    const handleResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            emailError ? toast.error('No such user') : toast.success('Password reset email sent');
        }
        else { toast.error("Please input the email"); }
    }
    return (
        <main>
            <Breadcrumb title='Login' />
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="form shadow-sm p-5">
                                <form onSubmit={handleLogin}>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input onBlur={(e) => setEmail(e.target.value)} type="email" className="form-control" name="email" id="email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input onBlur={(e) => setPassword(e.target.value)} type="password" className="form-control" name="password" id="password" />
                                    </div>


                                    <button type="submit" className="btn btn-primary w-100 w-lg-50">Login {loading && <ButtonSpinner />}</button> <p className='text-danger mt-2'>{error?.message}</p>
                                    <SocialLogin />
                                </form>
                                <div className=" mt-3 text-center">
                                    <button className='btn btn-link' onClick={handleResetPassword}>Forget Password?</button>
                                    <p className='text-danger mt-2'>{emailError?.message}</p>
                                </div>
                                <p className="text-center mt-4">Need an account? <Link to="/register">Register</Link></p>
                            </div>
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
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Login;