import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const [quizes, setQuizes] = useState([])
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => setQuizes(data.data.data))
    }, [])

    return (
        <div>
            <h1 className='text-3xl font-semibold mb-5'>Here is Total Quize Statistics</h1>
            <ResponsiveContainer width='100%' height={400}>
                <BarChart width={150} height={40} data={quizes}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;