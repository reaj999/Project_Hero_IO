import React, { useEffect, useState } from 'react';
import data from '../../../public/data.json';
import { getInstalledApps, removeInstalledApp } from '../../Components/Utility/AddToInstalled';
import ListCard from './installedListCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dd from '../../assets/dd.png';

const Installation = () => {

    const [myInstalledList, setInstalledApps] = useState([]);
    const [sortOption, setSortOption] = useState("recent");


    useEffect(() => {
        const installedData = getInstalledApps();
        const convertedData = installedData.map(id => parseInt(id));
        const installedList = data.filter(Apps => convertedData.includes(Apps.id));
        setInstalledApps(installedList)
    }, []);

    const handleUninstall = (id) => {
        setInstalledApps(prev => prev.filter(app => app.id !== id));
        removeInstalledApp(id);
    };

        const sortedApps = [...myInstalledList].sort((a, b) => {
        if (sortOption === "small") {
        return a.size - b.size;
        } else if (sortOption === "large") {
        return b.size - a.size;
        } else {
        return b.id - a.id; 
        }
    });
    
    return (
        <div className='bg-[#f8f8f8] min-h-screen'>
            <ToastContainer />
            <h1 className='text-4xl font-bold text-center my-8 text-[#001931]'>Your Installed Apps</h1>
            <p className='text-[#627382] text-lg mt-8 text-center mb-8'>Explore All Trending Apps on the Market developed by us</p>
        <div className='max-w-6xl mx-auto px-4 mb-6 flex justify-between items-center   gap-4'>
            <h2 className='text-xl font-semibold'>
                (<span>{myInstalledList.length}</span>) Apps Found
            </h2>

        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 font-light">
            Sort By Size
            <img src={dd} alt="" className='w-2 h-2' />
          </div>
          <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><button onClick={() => setSortOption("recent")}>Recently Added</button></li>
            <li><button onClick={() => setSortOption("small")}>Small to Large</button></li>
            <li><button onClick={() => setSortOption("large")}>Large to Small</button></li>
          </ul>
        </div>

        </div>

        <div>
            {sortedApps.length > 0 ? (
            sortedApps.map(app => (
                <ListCard
                key={app.id}
                myInstalledList={app}
                onUninstall={handleUninstall}
                />
            ))
            ) : (
            <p className='text-center text-gray-500 text-lg'>
                No installed apps found.
            </p>
            )}
        </div>
        </div>
    );
};

export default Installation;