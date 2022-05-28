import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [details, setDetails] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/parts/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [details])

    const handleDeliveredButton = event => {
        event.preventDefault();
        const quantity = details.quantity;
        console.log('The quantity is: ', quantity);

        const updatedQuantity = quantity - 1;
        details.quantity = updatedQuantity;
        const updatedItem = {
            quantity: updatedQuantity
        }
        console.log('updatedItem is ', updatedItem);
        console.log('data is ', details);
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

    const handleRestockButton = event => {
        event.preventDefault();
        const restock = parseInt(event.target.restock.value);

        const prevQuantity = details.quantity;

        const updatedQuantity = parseInt(prevQuantity + restock);
        const updatedItem = {
           quantity: updatedQuantity
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
                    <div className="py-4">
                        <h4 className="font-bold text-center sm:text-5xl text-3xl mt-4 pt-4 mb-2 text-orange-600">{details.name}</h4>
                        <p className='text-center text-1xl mb-4'>{details.description}</p>
                        <div className='items-center justify-items-center'>
                            <div className='text-1xl bg-gray-600 text-white font-bold pt-1 pb-6'>
                                <p className='text-center mt-8'>PRICE: {details.price_per_unit}</p>
                                <p className='text-center'>MINIMUM ORDER QUANTITY: {details.min_order_quantity}</p>
                                <h4 className='text-center'>AVAILABLE QUANTITY: {details.available_quantity}</h4>
                            </div>
                            <button onClick={handleDeliveredButton} className='ml-52 justify-items-center btn btn-warning items-center p-4 mt-4'>DELIVERED</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="justify-items-center flex align-middle justify-center gap-2">
                <div>
                    <p className='rounded block mb-2 p-2 border-black text-1xl font-bold text-center text-orange-600'>Restock The Items (in kg)</p>
                </div>
                <form className='flex gap-2' onSubmit={handleRestockButton}>
                        <input type="text" name="restock" id="large-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        <input className="rounded block mb-2 bg-orange-600 p-2 border-1 border-black text-1xl font-bold text-center text-white" type="submit" value="RESTOCK"/>
                </form>
            </div>
        </div>

    );
};

export default Purchase;
