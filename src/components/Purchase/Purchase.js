import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [details, setDetails] = useState({});
    const [user, loading, error] = useAuthState(auth);
    const quantityRef = useRef('');
    const homeAddressRef = useRef('');
    const phoneNumberRef = useRef('');
    let updatedItem = {};
    
    // get parts data from server
    useEffect(() => {
        const url = `http://localhost:5000/parts/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [details])


    const handleConfirmPurchase = (event) => {
        event.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const product_name = details.name;
        const img = details.img;
        const phone = phoneNumberRef.current.value;
        const homeAddress = homeAddressRef.current.value;
        const purchased_quantity = quantityRef.current.value;
    
        const item = {email, product_name, img, purchased_quantity};

        // post data to server 
        fetch('http://localhost:5000/orders', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
        })
            .then(res => res.json())
            .then(data => {
                console.log(item);
                alert('Purchase Confirmed!!');
                event.target.reset();
        })

    }

    
    const handleMinusButton = event => {
        event.preventDefault();
        const quantity = parseInt(quantityRef.current.value);
        console.log(quantity);
       
        if (quantity < details.min_order_quantity || quantity > details.available_quantity) {
            console.log("wrong");
            alert('Please provide a correct input');
            quantityRef.current.value = 0;
        }
        else {
            console.log(quantity);
            const newQuantity = quantity - 1;
            quantityRef.current.value = newQuantity;
            updatedItem = {
                purchased_quantity: newQuantity
            }
        }

        setDetails(details);

        // send data to server 
        const url = `http://localhost:5000/parts/${id}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                event.target.reset();
                alert('quantity updating successfully');
            })
    }

    const handlePlusButton = event => {
        event.preventDefault();
        const quantity = parseInt(quantityRef.current.value);
        console.log(quantity);
        console.log(details.min_order_quantity);
        if (quantity < details.min_order_quantity || quantity > details.available_quantity) {
            console.log("wrong");
            alert('Please provide a correct input');
            quantityRef.current.value = 0;
        }
        else {
            console.log(quantity);
            const newQuantity = quantity + 1;
            quantityRef.current.value = newQuantity;
            updatedItem = {
                quantity: newQuantity
            }
        }


        setDetails(details);

        // send data to server 
        const url = `http://localhost:5000/parts/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                event.target.reset();
                alert('quantity updating successfully');
            })
    }


    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 align-middle mx-auto'>
                <div>
                    <img className="mx-auto w-3/4 ml-16 mt-2" src={details.img} alt="" />
                </div>

                <div className="px-4 mr-16 mt-2 align-middle">
                    <div className="py-4 items-center">
                        <h4 className="font-bold sm:text-5xl text-3xl mt-2 pt-2 mb-2 text-orange-600">{details.name}</h4>
                        <h4 className='font-semibold sm:text-5xl text-3xl mt-4 text-gray-600'>{details.price_per_unit}</h4>
                        <p className='mt-8 text-1xl mb-1'>{details.description}</p>
                        <p className='mt-1 text-1xl mb-1'>Minimum Quantity for Order: {details.min_order_quantity}</p>
                        <p className='mt-1 text-1xl mb-4'>Available Quantity: {details.available_quantity}</p>

                        <div className='items-center justify-items-center flex-auto'>
                            <div className='flex'>
                                <button onClick={handlePlusButton} className='ml-1 font-bold justify-items-center btn btn-warning items-center p-4 mt-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <input ref={quantityRef} className="w-3/4 mx-2 mt-4 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder='Please check the minimum quantity for order' name="quantity" required></input>


                                <button onClick={handleMinusButton} className='ml-1 font-bold justify-items-center btn btn-warning items-center p-4 mt-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                            </div>

                        </div>

                        <form onSubmit={handleConfirmPurchase} className="w-full max-w-lg mt-10 ml-10">
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Name
                                </label>
                                <input className="appearance-none block w-full mx-auto bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="name" disabled value = {user?.displayName} required></input>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Email Address
                                </label>
                                <input className="appearance-none block w-full mx-auto bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="email" disabled value = {user?.email} placeholder="Email" required></input>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Home Address
                                </label>
                                <input ref={homeAddressRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="home_address" placeholder="Type a valid address" required></input>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Phone Number
                                </label>
                                <input ref={phoneNumberRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="phone_number" placeholder="Type a valid phone number" required></input>
                            </div>
                        </div>

                        <button className='bg-orange-300 mt-2 mb-4 hover:bg-orange-500 text-small text-white px-3 py-2 font-bold rounded'>Complete Purchase</button>
                    </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Purchase;
