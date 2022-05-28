import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
             <h4 className="font-bold bg-orange-200 mt-16 text-center sm:text-4xl mb-12 text-3xl pt-2 text-gray-700">MY PORTFOLIO</h4>
        <div className='mt-24 ml-16 mr-16 bg-sky-50 text-lg border-2 font-semibold border-gray-800 p-8'>
        <p className='text-orange-600'>Name:</p>
            <h2>Saraf Nusrat</h2>
            <br></br>
            <p className='text-orange-600'>Email Address:</p>
            <h2>saraf.nusrat11@gmail.com</h2>
            <br></br>
            <p className='text-orange-600'>Educational Background:</p>
                <p>----- MBA, Institute of Business Administration (IBA), University of Dhaka</p>
                <p>----- BSc in Computer Science & Engineering (CSE), Ahsanullah University of Science & Technology (AUST)</p>
                <p>----- HSC, Viqarunnisa Noon College</p>
                <p>----- SSC, Viqarunnisa Noon School</p>
            <br></br>
            <h2 className='text-orange-600'> Skills:</h2> 
            <p>MongoDB, Express, React JS, Node JS, Javascript, HTML, CSS (Bootstrap, Tailwind)</p>
            <br></br>
            <p>Live Website Link:</p>
                <a className='text-error' href="https://veggie-mart-2591f.web.app/" placeholder='veggie mart'>1. Veggie Mart</a>
                <br></br>
                <a className='text-error' href="https://glam-studio-54d2e.web.app/" placeholder='veggie mart'>2. Glam Studio</a>
                <br></br>
                <a className='text-error' href="https://air-max-shoes.netlify.app/" placeholder='veggie mart'>3. Air Max Shoes</a>
            <br></br>
        </div>
        </div>
    );
};

export default MyPortfolio;