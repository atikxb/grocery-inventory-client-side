import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ButtonSpinner from '../Loading/ButtonSpinner';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useEffect(() => {//used useEffect to wait till user and avoid browser router error
        user && navigate(from, { replace: true });
    }, [user, from, navigate]);
    return (
        <><button onClick={() => signInWithGoogle()} type='button' className="btn btn-info text-white w-100"><i className="bi bi-google"></i> Login With
            Google {loading && <ButtonSpinner/>}</button>
            <p className='text-danger mt-2'>{error?.message}</p>
            </>
    );
};

export default SocialLogin;