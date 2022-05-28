import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';


const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [isLoaded, setIsLoaded] = useState(false);
    const [orders, setOrders] = useState([]);
    const [reload, setIsReload] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `https://warm-sierra-55591.herokuapp.com/myOrders?email=${email}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setOrders(data))
            setIsLoaded(true);
        }
        getOrders();
    }, [user])

    const handleYesBtn = _id => {
        if (showModal === true)
        {
            const url = `https://warm-sierra-55591.herokuapp.com/orders/${_id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== _id);
                    setOrders(remaining);
                });
        }
    }

    const handleCancelBtn = _id => {
        setShowModal(true);
    }

    const handlePaymentBtn = () => {
        const path = "/payment";
        navigate(path);
    }


    return (
        <div className='grid sm:grid-rows-1 grid-rows-1 justify-items-center gap-1'>
            {
                isLoaded ?
                    <>
                        {
                            orders.map(order =>
                                <>
                                    <div className='mt-8 border-2 p-4 grid grid-cols-3 sm:grid-cols-1 gap-4'>
                                        <div>
                                            <h1 className="text-1xl font-bold text-gray-800 uppercase dark:text-white">{order.product_name}</h1>
                                            <br></br>
                                            <span className='text-gray-700 text-sm font-bold'>     Ordered Quantity: {order.purchased_quantity}       </span>

                                            <button onClick={() => handlePaymentBtn()} className='bg-gray-700 text-white p-3 rounded-lg ml-4 mr-4'>PAYMENT</button>

                                            <label onClick={() => handleCancelBtn(order._id)} for="my-modal" class="btn modal-button">CANCEL</label>

                                            <input type="checkbox" id="my-modal" class="modal-toggle" />
                                            <div class="modal">
                                            <div class="modal-box">
                                                <p class="py-4">Are you sure you want to cancel the order?</p>
                                                <div class="modal-action">
                                                    <label onClick={() => handleYesBtn(order._id)} for="my-modal" class="btn">YES!</label>
                                                </div>
                                            </div>
                                            </div>
                                    </div>

                                </div>
                                </>
                            )
                        }
        </>
                    :
<>
    <Loading></Loading>
</>
            }
        </div >
    );
};

export default MyOrders;
