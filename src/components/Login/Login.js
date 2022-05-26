import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleLogin from './GoogleLogin';
import GoggleLogin from './GoogleLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (error) {
        errorElement = <p className='text-red-600'>Error: {error.message}</p>
    }

    if (loading || sending) {
        return <Loading></Loading>
    }


    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);

        // const { data } = await axios.post('https://serene-refuge-96903.herokuapp.com/login', { email });
    
        // localStorage.setItem('accessToken', data.accessToken);

        // navigate(from, { replace: true });
    } 

    if (user) {
        navigate(from, { replace: true });
    }

    const navigateRegister = event => {
        navigate('/registration');
    }

    const handlePasswordReset = async() => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('sent email');
        }
        else {
            toast('Please enter your email address');
        }
    }

    return (
        <div>
            <div>
                <h2 className='font-bold text-3xl bg-black text-center mb-2 mt-5 text-white underline-offset-3 border-b-2 pt-2 pb-2'>PLEASE  <span className='text-orange-600'> LOGIN</span></h2>
                <div className='flex justify-center container w-50 mx-auto'>
                    <form onSubmit={handleSubmit} className="w-full max-w-lg mt-10 ml-10">
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Email Address
                                </label>
                                <input ref={emailRef} className="appearance-none block w-full mx-auto bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Email" required></input>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Password
                                </label>
                                <input ref={passwordRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="Password" required></input>
                                <p className="text-gray-600 text-xs italic">Your password is protected</p>
                            </div>
                        </div>

                        <button className='bg-orange-300 mt-2 mb-4 hover:bg-orange-500 text-small text-white px-3 py-2 font-bold rounded'>Login</button>
                    </form>
                </div>
                <div className='text-center'>
                {errorElement}
                </div>

                <p className='text-center'>New to Shift Up? Register <Link to="/registration" className='text-orange-600 font-bold pe-auto' onClick={navigateRegister} >NOW!</Link></p>

                <div className='flex gap-2 justify-center'>
                    <p className='text-orange-500 font-bold pl-88 flex
                    justify-center' onClick={handlePasswordReset} variant="link">Forget Password?    <button className="text-black font-bold pl-2">RESET</button></p>
                </div>
                <GoggleLogin></GoggleLogin>
                <ToastContainer />
            </div>

        </div>
    );
};

export default Login;








