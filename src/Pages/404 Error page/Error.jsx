import React from 'react';

import { Link } from 'react-router';
import ErrorImg from '../../assets/error-404.png';

const Error = () => {
    return (
        <>
            <div className='text-center my-20'>
                <img src={ErrorImg} alt="Error 404" className='mx-auto mb-8 w-64 h-64'/>
                <h1 className='text-4xl font-bold text-center my-8 text-[#001931]'>OPPS!! APP NOT FOUND</h1>
                <p className='text-lg text-gray-600 mb-8'>The App you are requesting is not found on our system.  please try another apps</p>
                <Link to="/" className="btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-bold text-lg">Go Back!</Link>
            </div>
        </>
    );
};

export default Error;