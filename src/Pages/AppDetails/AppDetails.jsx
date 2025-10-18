import React from 'react';
import data from '../../../public/data.json';
import { useParams } from 'react-router';
import downloadicon from '../../assets/icon-downloads.png';
import ratingicon from '../../assets/icon-ratings.png';
import reviewicon from '../../assets/icon-review.png';
import { AddToInstalledDB } from '../../Components/Utility/AddToInstalled';
import BarChart from '../../Components/Rating Chart/RatingChart';

const AppDetails = () => {
    const { id } = useParams();
    const appId = parseInt(id);
    const app = data.find(item => item.id === appId);

    const HandleInstalled = (id) => {
        AddToInstalledDB(id);
    }

    return (
        <div className='bg-[#f8f8f8] min-h-screen pt-10 items-center mb-10'>
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-10 max-w-6xl mx-auto px-4 lg:px-0'>
            <div>
                <img src={app.image} alt={`${app.title} logo`} className='w-aut0 lg:w-96 lg:h-96 object-cover'/>
            </div>
            <div className='w-full flex-grow mb-4'>
            <div className='w-full flex-grow'>
            <div className='border-b border-gray-400 pb-6'>
                <h2 className='text-4xl font-bold text-[#001931]'>{app.title}</h2>
                <p className='text-l font-medium text-[#627382] mt-2'>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{app.companyName}</span></p>
            </div>

            </div>
            <div className='flex flex-col lg:flex-row mt-4 gap-8 lg:gap-30'>
                <div>
                    <img src={downloadicon} alt="" className='w-8 h-8 mb-4'/>
                    <p className='text-l font-light text-[#001931] mb-2'>Downloads</p>
                    <p className='font-bold text-4xl text-[#001931]'>{app.downloads}</p>
                </div>
                <div>
                    <img src={ratingicon} alt="" className='w-8 h-8 mb-4'/>
                    <p className='text-l font-light text-[#001931] mb-2'>Average Ratings</p>
                    <p className='font-bold text-4xl text-[#001931]'>{app.downloads}</p>
                </div>
                <div>
                    <img src={reviewicon} alt="" className='w-8 h-8 mb-4'/>
                    <p className='text-l font-light text-[#001931] mb-2'>Total Reviews</p>
                    <p className='font-bold text-4xl text-[#001931]'>{app.downloads}</p>
                </div>
            </div>
            <button onClick={() => HandleInstalled(id)} className="btn btn-accent mt-10 text-white font-semibold bg-[#00D390]mb-4">Install Now <span>({app.downloads})</span></button>
            </div>
            </div>
            <div>
                <BarChart app={app} />
            </div>
            <div className='max-w-6xl mx-auto mt-10 p-2'>
                <h2 className='text-4xl font-bold text-[#001931]'>Description</h2>
                <p className='text-l font-medium text-[#627382] mt-2'>{app.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;