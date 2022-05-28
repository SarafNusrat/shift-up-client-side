import React from 'react';
import banner from '../../images/Banner/port-img4.jpg';
import HomeParts from '../HomeParts/HomeParts';
import app1 from "../../images/app/shop-png9.png";
import app2 from "../../images/app/Phone2.png";
import ShowReviews from '../ShowReviews/ShowReviews';

const Home = () => {
    return (
        <div>
            {/* Banner Section  */}
            <div className="relative rounded-lg shadow-lg cursor-pointer">
                <h1 className="mb-2 bg-black border-1 text-center py-3 sm:text-5xl text-4xl font-bold tracking-tight text-white">SHIFT<span className='text-orange-500'> UP</span></h1>
                <img className="w-full mr-2 opacity-100" src={banner} alt="" />
            </div>

            {/* Business Summary */}
            <div>
                <h4 className="font-bold bg-gray-100  mt-24 text-center sm:text-4xl mb-12 text-3xl pt-2 text-orange-600">OUR BUSINESS AT A GLANCE</h4>
                <div className="grid grid-cols-1 sm:grid-cols-4 justify-items-center ml-8 mr-8 mt-8 mb-16 gap-6">
                    <div className="card w-64 mb-6 bg-base-100 shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-28 h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">5</h2>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                    </div>
                    <div className="card w-64 mb-6 bg-base-100 shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-28 h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                        </svg>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">12,400</h2>
                            <p>TOOLS</p>
                        </div>
                    </div>
                    <div className="card w-64 mb-6 bg-base-100 shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-28 h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">365</h2>
                            <p>HAPPY CUSTOMERS</p>
                        </div>
                    </div>
                    <div className="card w-64 mb-6 bg-base-100 shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-28 h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
                        </svg>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl">65900</h2>
                            <p>ANNUAL REVENUE</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Car Parts */}
            <div className='mt-8'>
                <h4 className="font-bold bg-gray-100 text-center sm:text-4xl text-3xl mt-4 pt-2 mb-6 text-orange-600">PARTS COLLECTION</h4>
                <HomeParts></HomeParts>
            </div>

            {/* Reviews  */}
            <div className='mt-8'>
               <h4 className="font-bold bg-gray-100 text-center sm:text-4xl text-3xl mt-4 pt-2 mb-6 text-orange-600">ALL REVIEWS</h4>
               <ShowReviews></ShowReviews>
            </div>



            {/* Section App */}
            <div className='mt-24 grid sm:grid-cols-2 grid-cols-1 gap-1 h-1/4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 ml-20'>
                    <img className='w-3/4' src={app1} alt=""></img>
                    <img className='pt-4 w-3/4' src={app2} alt=""></img>
                </div>
                <div className='ml-8'>
                    <h1 className='font-bold text-gray-800 pt-8 text-4xl'>SAVE UP MONEY, ORDER PARTS ONLINE</h1>
                    <p className='text-lg mt-4 mr-8 text-gray-500'>Bringing you our latest version of app ensuring the most user friendly experience to our customers. Tap the button below to download the updated version.</p>

                    <button className='bg-gray-200 text-sm font-semibold mt-6 text-black border-l-8 border-orange-600 p-3'>+ VIEW MORE</button>
                </div>
            </div>


            {/* Our Team */}
            <div>
                <section className="mb-20 text-gray-700">
                    <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto pt-8 pl-8 pr-8">
                    <h4 className="font-bold bg-gray-100  mt-24 text-center sm:text-4xl mb-12 text-3xl pt-2 text-orange-600">OUR TEAM</h4>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-12 text-center pl-20 pr-20">
                        <div className="mb-12 md:mb-0">
                            <div className="flex justify-center mb-6">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" alt=""
                                    className="rounded-full shadow-lg w-32"
                                />
                            </div>
                            <h5 className="text-xl font-bold mb-4">Maria Smantha</h5>
                            <h6 className="font-semibold text-orange-600 mb-4">Web Developer</h6>
                            <p className="mb-4">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="quote-left"
                                    className="w-6 pr-2 inline-block"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                                    ></path>
                                </svg>
                                It's amazing when i feel the shiftUp web system is done by me. I am so glad to be a part of this amazing team.
                            </p>
                            <ul className="flex justify-center mb-0">
                                <li>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="star"
                                        className="w-4 text-yellow-500"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                        ></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="star"
                                        className="w-4 text-yellow-500"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                        ></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="star"
                                        className="w-4 text-yellow-500"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                        ></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="star"
                                        className="w-4 text-yellow-500"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                        ></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="star-half-alt"
                                        className="w-4 text-yellow-500"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 536 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
                                        ></path>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-12 md:mb-0">
                            <div className="flex justify-center mb-6">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg" alt=""
                                    className="rounded-full shadow-lg w-32"
                                />
                            </div>
                            <h5 className="text-xl font-bold mb-4">Lisa Cudrow</h5>
                            <h6 className="font-semibold text-orange-600 mb-4">Graphic Designer</h6>
                            <p className="mb-4">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="quote-left"
                                    className="w-6 pr-2 inline-block"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                                    ></path></svg>It wasn't easy to design the eco system at the beginning. But, with the help of our customers, it is improving day by day.
                            </p>
                            <ul className="flex justify-center mb-0">
                                <li>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="star"
                                        className="w-4 text-yellow-500"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                        ></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="star"
                                        className="w-4 text-yellow-500"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                        ></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="star"
                                        className="w-4 text-yellow-500"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                        ></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="star"
                                        className="w-4 text-yellow-500"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                        ></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="star"
                                        className="w-4 text-yellow-500"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                        ></path>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-0">
                            <div className="flex justify-center mb-6">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" alt=""
                                    className="rounded-full shadow-lg w-32"
                                />
                            </div>
                            <h5 className="text-xl font-bold mb-4">John Smith</h5>
                            <h6 className="font-semibold text-orange-600 mb-4">Marketing Specialist</h6>
                            <p className="mb-4">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="quote-left"
                                    className="w-6 pr-2 inline-block"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                                    ></path></svg>My every morning starts with analyzing the orders and keeping my promise to the customers by delivering the products.
                            </p>
                            <ul className="flex justify-center mb-0">
                                <li>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="star"
                                        className="w-4 text-yellow-500"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                        ></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="star"
                                        className="w-4 text-yellow-500"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                        ></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="star"
                                        className="w-4 text-yellow-500"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                        ></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="star"
                                        className="w-4 text-yellow-500"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                        ></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="star"
                                        className="w-4 text-yellow-500"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                                        ></path>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Home;