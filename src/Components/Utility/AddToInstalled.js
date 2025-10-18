const getInstalledApps = () => {
    
    const installedAppsSTR = localStorage.getItem('installedApps');

    if(installedAppsSTR){
        const installedAppsData = JSON.parse(installedAppsSTR);
        return installedAppsData;
    }else{
        return [];
    }

};

const AddToInstalledDB = (id) => {

    const installedAppsData = getInstalledApps();

    if(installedAppsData.includes(id)){
        alert('App Already Installed');
    }
    else{
        installedAppsData.push(id);
        const localData = JSON.stringify(installedAppsData);
        localStorage.setItem('installedApps', localData);
    }
    
};

export {AddToInstalledDB, getInstalledApps};