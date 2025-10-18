import React from 'react';
import downloadicon from '../../assets/icon-downloads.png';
import ratingicon from '../../assets/icon-ratings.png';


const installedListCard = ({ myInstalledList: cardData }) => {

    return (
        <div className='flex flex-row justify-between items-center bg-white p-4 rounded-lg shadow-sm w-full max-w-6xl mx-auto mb-4'>
            <div className='flex flex-row items-center gap-4'>
            <div>
                <img src={cardData.image} alt="" className='w-24 h-24 rounded-xl'/>
            </div>
            <div>
                <h2 className='text-xl text-[#001931] font-semibold mb-2'>{cardData.title}</h2>
                <div className='flex gap-5'>
                    <div className='flex items-center gap-2'>
                        <img src={downloadicon} alt="" className='w-4 h-4'/>
                        <span>{cardData.downloads}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={ratingicon} alt="" className='w-4 h-4'/>
                        <span>{cardData.ratingAvg}</span>
                    </div>
                    <span>{cardData.size} MB</span>
                </div>
            </div>
            </div>
            <div>
                <button className="btn btn-accent text-white font-semibold bg-[#00D390]">Uninstall</button>
            </div>
        </div>
    );
};

export default installedListCard;