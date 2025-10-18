import React from 'react';
import playstore from '../../assets/playstore.png';
import appstore from '../../assets/appstore.png';
import hero from '../../assets/hero.png';

const Banner = () => {
    return (
        <div className='bg-[#f8f8f8] items-center text-center'>
            <div className='items-center text-center mt-10'>
                <h1 className='text-6xl text-[#001931] font-extrabold'>
                    We Build <br className="hidden lg:block" />
                    <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps
                </h1>
            </div>
            <p className='text-[#627382] mt-6'>
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                <br className="hidden lg:block" />
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className='mt-8 flex justify-center gap-6'>
                <a
                    href="https://play.google.com/store/apps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn font-semibold text-[#001931] p-2 px-4"
                >
                    <img src={playstore} alt="" className='h-6 w-6'/>
                     Google Play
                </a>
                <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn font-semibold text-[#001931] p-2 px-4">
                    <img src={appstore} alt="" className='h-6 w-6'/>
                     App Store</a>
            </div>
            <div className='mt-6 flex justify-center items-center mb-0'>
                <img src={hero} alt=""/>
            </div>
        </div>
    );
};

export default Banner;