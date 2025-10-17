import React from 'react';

const Stat = () => {
    return (
        <div className='text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full h-auto'>
            <h2 className='text-4xl font-bold text-white pt-8 pb-8'>Trusted by Millions, Built for You</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pb-8'>
                <div>
                    <p className='text-white font-light text-sm'>Total Downloads</p>
                    <h2 className='text-4xl font-bold text-white pt-4 pb-4'>29.6M</h2>
                    <p className='text-white font-light text-sm'>21% more than last month</p>
                </div>
                <div>
                    <p className='text-white font-light text-sm'>Total Reviews</p>
                    <h2 className='text-4xl font-bold text-white pt-4 pb-4'>906K</h2>
                    <p className='text-white font-light text-sm'>46% more than last month</p>
                </div>
                <div>
                    <p className='text-white font-light text-sm'>Active Apps</p>
                    <h2 className='text-4xl font-bold text-white pt-4 pb-4'>132+</h2>
                    <p className='text-white font-light text-sm'>31 more will Launch</p>
                </div>
            </div>

        </div>
    );
};

export default Stat;