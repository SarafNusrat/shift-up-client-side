import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>This is blog</h2>
            <div>
                <h2 className='text-4xl font-bold mt-8 mb-7 text-center text-orange-600'>QUESTION ANSWERS</h2>
                <div className='flex flex-col mx-auto border-blue-500 border-opacity-25 gap-2 mt-4'>

                    <div className='border-1 p-5 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-orange-100'>
                        <h2 className='font-bold text-orange-600'>1. How will you improve the performance of a React application?</h2>
                        <br></br>
                        <p>
                        </p>
                    </div>

                    <div className='border-1 p-5 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-orange-100'>
                        <h2 className='font-bold text-orange-600'>2. What are the differenet ways to manage a state in a React application?</h2>
                        <br></br>
                        <p></p>
                    </div>

                    <div className='border-1 p-5 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-orange-100'>
                        <h2 className='font-bold text-orange-600'>3. How does prototypical inheritance work?</h2>
                        <br></br>
                        <p></p>
                    </div>

                    <div className='border-1 p-5 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-sky-100'>
                        <h2 className='font-bold text-orange-600'>4. Why you do not set the state directly in React? For Example, if you have const [products, setProducts] = useState([]). Why you do not set products == [...]. Instead you use setProducts.</h2>
                        <br></br>
                        <p></p>
                    </div>

                    <div className='border-1 p-5 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-orange-100'>
                        <h2 className='font-bold text-orange-600'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                        <br></br>
                        <p></p>
                    </div>

                    <div className='border-1 p-5 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-orange-100'>
                        <h2 className='font-bold text-orange-600'>5. What is a unit test? Why should write unit tests?</h2>
                        <br></br>
                        <p></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;