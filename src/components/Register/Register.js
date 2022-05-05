import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import SocialLogin from '../Login/SocialLogin';

const Register = () => {
    return (
        <main>
            <Breadcrumb title='Register' />
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="form shadow-sm p-5">
                                <form>

                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" name="itemname" id="name" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" name="email" id="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" name="password" id="password" />
                                    </div>


                                    <button type="submit" className="btn btn-primary w-100">Register</button> <p className='text-center mt-3'>Or</p>
                                    <SocialLogin />
                                </form>

                                <p className="text-center mt-4">Have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Register;