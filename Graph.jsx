import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "1월",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "2월",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "3월",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "4월",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "5월",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "6월",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "7월",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "8월",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "9월",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "10월",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "11월",
    uv: 3490,
    pv: 4300,
  }
];

export default function Graph() {
  return (
    <LineChart
      width={400}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 40,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}

