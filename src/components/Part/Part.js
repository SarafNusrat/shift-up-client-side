import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = (props) => {
    const { name, _id, img, description, min_order_quantity, available_quantity, price_per_unit } = props.part;

    const navigate = useNavigate();

    const showPartDetail = (id) => {
        navigate(`/parts/${id}`)
    }

    return (
        <div>
            <div className="pt-8 mx-auto h-auto card w-96 mb-8 bg-base-100 shadow-xl">
                <div className="max-w-xs mx-auto overflow-hidden bg-white dark:bg-gray-800">
                    <div className="px-4 py-2">
                        <h1 className="text-2xl font-bold text-gray-800 uppercase dark:text-white">{name}</h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                        <span className='text-gray-600 text-sm font-semibold'>Min Quantity: {min_order_quantity}</span>
                        <br></br>
                        <span className='text-gray-700 text-sm font-bold'>     Available Quantity: {available_quantity}</span>
                    </div>

                    <img className="object-cover w-full h-48 mt-2" src={img} alt="car part"></img>

                        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                            <h1 className="text-lg font-bold text-white">{price_per_unit}</h1>
                            <button onClick={() => showPartDetail(_id)} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-orange-400 focus:outline-none">PURCHASE</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Part;