import React from 'react';
import downloadicon from '../../assets/icon-downloads.png';
import ratingicon from '../../assets/icon-ratings.png';

const formatDownloads = (downloads) => {
    if (typeof downloads === 'string') {
        return downloads;
    }
    if (downloads >= 1000000) {
        return `${(downloads / 1000000).toFixed(1)}M`;
    }
    if (downloads >= 1000) {
        return `${(downloads / 1000).toFixed(1)}K`;
    }
    return downloads;
};

const Card = ({ app }) => {
    const { image, title, downloads, ratingAvg } = app;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="px-4 pt-4 mb-0">
                <img src={image} alt={`${title} logo`} className="rounded-xl h-48 w-64 object-cover" />
            </figure>
            <div className="card-body text-left">
                <h2 className="text-lg font-medium text-left">{title}</h2>
                <div className="card-actions flex justify-between mt-2">
                    <button className="btn bg-[#F1F5E8] text-[#00D390]">
                        <img src={downloadicon} alt="Download icon" className='w-4 h-4' />
                        {formatDownloads(downloads)}
                    </button>
                    <button className="btn bg-[#FFF0E1] text-[#FF8811]">
                        <img src={ratingicon} alt="Rating icon" className='w-4 h-4' />
                        {ratingAvg}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;