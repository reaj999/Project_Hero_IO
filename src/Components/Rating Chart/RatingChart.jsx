import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const RatingChart = (app) => {
    const chartData = app.app;
    const reversedRatings = [...chartData.ratings].reverse();

    return (
        <div className='mt-10 mb-10 max-w-6xl mx-auto p-2'>
            <h2 className='text-2xl font-bold text-[#001931] mb-4'>Ratings</h2>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart
                        layout="vertical"
                        data={reversedRatings}
                        margin={{
                            top: 5, right: 2, left: 2, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#FF8811" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default RatingChart;