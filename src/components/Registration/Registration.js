import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { sendEmailVerification } from 'firebase/auth';
import Loading from '../Shared/Loading/Loading';
import GoggleLogin from '../Login/GoogleLogin';
import useToken from '../../hooks/useToken.js';

const Registration = () => {

        const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

          const [token] = useToken(user);

          let errorElement;
    
          const emailRef = useRef('');
          const passwordRef = useRef('');
    
        const navigate = useNavigate();
    
        const handleRegister = event => {
            event.preventDefault();
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            
            createUserWithEmailAndPassword(email, password);
        }
    
        if(token) {
            navigate('/');
        }

        if (loading) {
            return <Loading></Loading>
        }

        if (error) {
            errorElement = 
            <p className='text-red-600'>Error: {error.message}</p>
        }
    
        const navigateLogin  = event => {
            navigate('/login');
        }

    return (
        <div>
        <div>
        <h2 className='font-bold text-3xl bg-black text-center mb-2 mt-5 text-white underline-offset-3 border-b-2 pt-2 pb-2'>PLEASE  <span className='text-orange-600'> REGISTER</span></h2>
        <div className='flex justify-center container w-50 mx-auto'>
            <form onSubmit={handleRegister} className="w-full max-w-lg mt-10 ml-10">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Your Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="" required></input> 
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Email Address
                    </label>
                    <input ref={emailRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Please enter your email" required></input>
                    <p className="text-gray-600 text-xs italic">We won't share your email address with anyone.</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Password
                    </label>
                    <input ref={passwordRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="" required></input>
                    </div>
                </div>
                <button className='bg-blue-300 mt-1 mb-4 hover:bg-orange-400 text-small text-white px-3 py-2 font-bold rounded'>Register</button>
            </form>
        </div>
        <p className='text-center'>Already have an account? <Link to ="/login" className='text-red-500 pe-auto text-bold' onClick={navigateLogin}>Login</Link></p>
        <GoggleLogin></GoggleLogin>
        </div>

        </div>
    );
};

export default Registration;






