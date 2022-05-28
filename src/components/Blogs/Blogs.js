import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h4 className="font-bold bg-orange-200 mt-16 text-center sm:text-4xl mb-12 text-3xl pt-2 text-gray-700">QUESTION & ANSWERS</h4>
                <div className='flex flex-col mx-auto border-blue-500 border-opacity-25 gap-2 mt-4'>

                    <div className='border-1 border-b-2 p-8 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-gray-100'>
                        <h2 className='font-bold text-orange-600'>1. How will you improve the performance of a React application?</h2>
                        <br></br>
                        <p>There are many ways to increase the performance of a react application. Some of these are: 
                        </p>
                        <p>1. Keeping component state local where necessary.</p>
                        <p>2. Code-splitting in react using dynamic import().</p>
                        <p>3. Lazy loading images in react.</p>
                        <p>4. Memorizing React components to prevent unnecessary re-renders..</p>
                    </div>

                    <div className='border-1 border-b-2  p-8 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-gray-100'>
                        <h2 className='font-bold text-orange-600'>2. What are the differenet ways to manage a state in a React application?</h2>
                        <br></br>
                        <p>the simplest way is to use useState hook in a react application. Apart from this, there are more complex libraries like Redux etc. There are more recent options like Recoil and Zustand.</p>
                    </div>

                    <div className='border-1 border-b-2 p-8 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-gray-100'>
                        <h2 className='font-bold text-orange-600'>3. How does prototypical inheritance work?</h2>
                        <br></br>
                        <p>Prototypical inheritence is a feature in javascript which is used to add methods and properties in an object. In order to get and set the prototype of objects, traditionally Object.getPrototypeOf anf Object.setPrototypeOf are used.</p>
                    </div>

                    <div className='border-1 border-b-2 p-8 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-gray-100'>
                        <h2 className='font-bold text-orange-600'>4. Why you do not set the state directly in React? For Example, if you have const [products, setProducts] = useState([]). Why you do not set products == [...]. Instead you use setProducts.</h2>
                        <br></br>
                        <p className="">Here, setProducts is a function which we are using to update the variable 'products'. When we use useState, we use it because we need to update the value of something for each render. And, here, setProducts is the function which helps us update that value.So, we only set the initial value for 'products'. And for each render, we update the variable using the function 'setProducts.'</p>
                    </div>

                    <div className='border-1 border-b-2 p-8 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-gray-100'>
                        <h2 className='font-bold text-orange-600'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                        <br></br>
                        <p>Let's assume the array name is "products" and each product has an unique name. Now, if I want to search the product named iPhone, I would write this code:<br></br>
                            products.find (product => product.name === "iPhone")</p><br></br>
                            <p>The above code will show a single product named iPhone.</p>
                    </div>

                    <div className='border-1 border-b-2 p-8 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-gray-100'>
                        <h2 className='font-bold text-orange-600'>6. What is a unit test? Why should write unit tests?</h2>
                        <br></br>
                        <p>Unit test is a software-testing method which can be used to figure out whether each part of the code is fit for use in the program. The best part of unit testing is, it finds problems early in the development cycle. It isolates the code in differenet parts and check if each individual part is correct.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;