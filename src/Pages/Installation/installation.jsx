import React, { useEffect, useState } from 'react';
import data from '../../../public/data.json';
import { getInstalledApps } from '../../Components/Utility/AddToInstalled';
import ListCard from './installedListCard';

const installation = () => {

    const [myInstalledList, setInstalledApps] = useState([]);


    useEffect(() => {
        const installedData = getInstalledApps();
        const convertedData = installedData.map(id => parseInt(id));
        const installedList = data.filter(Apps => convertedData.includes(Apps.id));
        setInstalledApps(installedList)
    }, []);

    const handleUninstall = (id) => {
        setInstalledApps(prev => prev.filter(app => app.id !== id));
    };
    
    return (
        <div className='bg-[#f8f8f8] min-h-screen'>
            <h1 className='text-4xl font-bold text-center my-8 text-[#001931]'>Your Installed Apps</h1>
            <p className='text-[#627382] text-lg mt-8 text-center mb-8'>Explore All Trending Apps on the Market developed by us</p>
        {/* Installation content will go here */}
        <div>
            <div className='flex flex-col lg:flex-row gap-4 lg:justify-between max-w-6xl mx-auto items-center mb-6 px-4 lg:px-0'>
                    <h2 className='text-xl font-semibold'>
                        (<span>
                            {myInstalledList.length}
                        </span>) Apps Found
                    </h2>
            </div>
        </div>
        {/* <div>
            <div className=''>
                {
                    myInstalledList.map(app => <ListCard key={app.id} myInstalledList={app}></ListCard>)
                }
            </div>
        </div> */}
        <div>
            {myInstalledList.length > 0 ? (
            myInstalledList.map(app => (
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

export default installation;