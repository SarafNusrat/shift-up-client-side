// import axios from 'axios';
import { ProviderId } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
// import useToken from '../../hooks/useToken';
import img1 from '../../images/google.png';
import Loading from '../Shared/Loading/Loading';

const GoggleLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // const [token] = useToken(user);
    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }
    
    if (user) {
        console.log(user.displayName);
    }

    if (error) {
        errorElement = <div>
            <p className='text-red-600'>Error: {error.message}</p>
            </div>
    }

    if (user) {
        navigate(from, {replace: true});
    }

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col w-50'>
                <p className='mt-2 text-center pb-3'>or</p>
                {errorElement}
                <button onClick={() => {
                    signInWithGoogle()
                }}
                    className='flex border-2 p-2'>
                    <img className='mr-2 pr-0' style={{ width: '30px' }} src={img1} alt="" />
                    <p>Google Sign In</p>
                </button>
            </div>

        </div>
    );

};

export default GoggleLogin;