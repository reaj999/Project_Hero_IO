import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Stat from '../../Components/Stat/Stat';
import TrendingApps from '../../Trending Apps/TrendingApps';

const Home = () => {
    // const data = React.useLoaderData();
    return (
        <><Banner></Banner>
        <Stat></Stat>
        <TrendingApps></TrendingApps>
        </>
    );
};

export default Home;