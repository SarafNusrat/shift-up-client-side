import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);
    const [reload, setIsReload] = useState(true);

    useEffect( () => {
        fetch('https://warm-sierra-55591.herokuapp.com/parts')
        .then(res => res.json())
        .then(data => setManageProducts(data));
    }, [reload]);


    return (
        <div>
            <h2 className='font-bold text-2xl underline text-center'>ALL PRODUCTS: {manageProducts.length}</h2>
            <div className='grid sm:grid-cols-2 grid-cols-1 justify-items-center w-auto mt-4 mb-4 gap-3'>
            {
                manageProducts.map(manageProduct => 
                    <ManageProduct
                       key = {manageProduct._id}
                       manageProduct = { manageProduct}
                       reload = {reload}
                       setIsReload = {setIsReload}
                    ></ManageProduct>)
            }
            </div>

        </div>
    );
};

export default ManageProducts;