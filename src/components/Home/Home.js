import React from 'react';
import banner from '../../images/Banner/port-img4.jpg';
import HomeParts from '../HomeParts/HomeParts';

const Home = () => {
    return (
        <div>
            {/* Banner Section  */}
            <div class="relative rounded-lg shadow-lg cursor-pointer">
                <h1 class="mb-2 bg-black border-1 text-center py-3 sm:text-5xl text-4xl font-bold tracking-tight text-white">SHIFT<span className='text-orange-500'> UP</span></h1>
                <img className="w-full mr-2 opacity-100" src={banner} alt="" />   
            </div>

            {/* Car Parts */}
            <div>
                <div>
                    <h4 className="font-bold bg-gray-100 text-center sm:text-4xl text-3xl mt-16 pt-6 mb-6 text-orange-600">PARTS COLLECTION</h4>
                </div>
                <HomeParts></HomeParts>
                {/* <div className="relative mt-8 h-30 w-auto">
                    <button onClick={handleManageInventoriesBtn} type="button" className="absolute top-0 right-8 ml-4 h-12 w-38 px-6 py-2.5 text-green-600 text-1xl underline leading-tight uppercase rounded hover:bg-yellow-500 hover:shadow-lg active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out animate-bounce bg-grey-light text-grey-darkest font-bold inline-flex items-center">MANAGE INVENTORIES</button>
                </div> */}
            </div>

            {/* Business Summary  */}

            {/* Reviews  */}

            {/* Extra Section 1 */}

            {/* Extra Section 2 */}

        </div>
    );
};

export default Home;