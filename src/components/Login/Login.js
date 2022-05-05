import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import SocialLogin from './SocialLogin';

const Login = () => {
    return (
        <main>
            <Breadcrumb title='Login' />
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="form shadow-sm p-5">
                                <form>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" name="email" id="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" name="password" id="password" />
                                    </div>


                                    <button type="submit" className="btn btn-primary w-100 w-lg-50">Login</button> <p className='text-center mt-3'>Or</p>
                                    <SocialLogin />
                                </form>

                                <p className="text-center mt-4">Need an account? <Link to="/register">Register</Link></p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Login;