import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import React from "react";

function Linegraph() {
    const data = [
        {
            name: 'Page A',
            uv: 5000,
            pv: 2100,
            amt: 2100,
        },
        {
            name: 'Page B',
            uv: 4000,
            pv: 1198,
            amt: 2510,
        },
        {
            name: 'Page C',
            uv: 6000,
            pv: 8800,
            amt: 2590,
        },
        {
            name: 'Page D',
            uv: 2180,
            pv: 4908,
            amt: 3000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2190,
            pv: 3200,
            amt: 2900,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={250}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Linegraph