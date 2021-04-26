import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Line, Tooltip, Legend } from 'recharts';
import { StatisticsWrap } from './Statistics.styled';

const Statistics = () => {

    const data = [
        { "monthNo": 11, "month": "Nov", "Amount": 0 },
        { "monthNo": 12, "month": "Dec", "Amount": 76 },
        { "monthNo": 1, "month": "Jan", "Amount": 310 },
        { "monthNo": 2, "month": "Feb", "Amount": 444 },
        { "monthNo": 3, "month": "Mar", "Amount": 1232 },
        { "monthNo": 4, "month": "Apr", "Amount": 87 }
    ];
    return (
        <StatisticsWrap>
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                {/* <YAxis /> */}
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Amount" stroke="#8884d8" activeDot={{ r: 8 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
        </StatisticsWrap>
    )
}

export default Statistics;