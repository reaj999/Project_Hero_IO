import React from 'react';
import { Link } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ErrorImg from '../../assets/App-Error.png';

const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <div className='text-center my-20'>
                <img src={ErrorImg} alt="Error 404" className='mx-auto mb-8 w-64 h-64'/>
                <h1 className='text-4xl font-bold text-center my-8 text-[#001931]'>OPPS!! APP NOT FOUND</h1>
                <p className='text-lg text-gray-600 mb-8'>The App you are requesting is not found on our system.  please try another apps</p>
                <Link to="/" className="btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-bold text-lg">Go Back!</Link>
            </div>
            <Footer />
        </>
    );
};

export default ErrorPage;