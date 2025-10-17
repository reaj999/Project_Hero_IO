import React from 'react';
import data from '../../public/data.json';
import Card from '../Components/Card/Card';

const TrendingApps = () => {
    return (
        <div className='bg-[#f8f8f8]'>
            <div>
                <h2 className='text-4xl font-bold text-center mt-10'>Trending Apps</h2>
                <p className='text-[#627382] text-lg mt-8 text-center mb-8'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto pb-8 justify-items-center'>
                {data.slice(0, 8).map((app) => (
                    <Card key={app.id} app={app} />
                ))}
            </div>
            <div className='flex justify-center mb-10'>
                <button className="btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2] lg:mr-4 items-center text-white font-bold text-lg">Primary</button>
            </div>
        </div>
    );
};

export default TrendingApps;