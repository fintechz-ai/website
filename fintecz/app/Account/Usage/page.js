'use client'
import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer, 
  Radar,
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  RadialBarChart,
  RadialBar, 
  ScatterChart, 
  
} from 'recharts';

import {
  Badge,
} from '@chakra-ui/react';
import { IoMdReturnLeft } from 'react-icons/io';

const dataBar = [
  {
    name: 'January',
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: 'February',
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: 'March',
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: 'April',
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: 'May',
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: 'June',
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

const datapie = [
  {
    subject: 'Person 1',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Person 2',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Person 3',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Person 4',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Person 5',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Person 6',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const dataradial = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50+',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: 'unknow',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const data01 = [
  { hour: '12a', index: 1, value: 170 },
  { hour: '1a', index: 1, value: 180 },
  { hour: '2a', index: 1, value: 150 },
  { hour: '3a', index: 1, value: 120 },
  { hour: '4a', index: 1, value: 200 },
  { hour: '5a', index: 1, value: 300 },
  { hour: '6a', index: 1, value: 400 },
  { hour: '7a', index: 1, value: 200 },
  { hour: '8a', index: 1, value: 100 },
  { hour: '9a', index: 1, value: 150 },
  { hour: '10a', index: 1, value: 160 },
  { hour: '11a', index: 1, value: 170 },
  { hour: '12a', index: 1, value: 180 },
  { hour: '1p', index: 1, value: 144 },
  { hour: '2p', index: 1, value: 166 },
  { hour: '3p', index: 1, value: 145 },
  { hour: '4p', index: 1, value: 150 },
  { hour: '5p', index: 1, value: 170 },
  { hour: '6p', index: 1, value: 180 },
  { hour: '7p', index: 1, value: 165 },
  { hour: '8p', index: 1, value: 130 },
  { hour: '9p', index: 1, value: 140 },
  { hour: '10p', index: 1, value: 170 },
  { hour: '11p', index: 1, value: 180 },
];

const data02 = [
  { hour: '12a', index: 1, value: 160 },
  { hour: '1a', index: 1, value: 180 },
  { hour: '2a', index: 1, value: 150 },
  { hour: '3a', index: 1, value: 120 },
  { hour: '4a', index: 1, value: 200 },
  { hour: '5a', index: 1, value: 300 },
  { hour: '6a', index: 1, value: 100 },
  { hour: '7a', index: 1, value: 200 },
  { hour: '8a', index: 1, value: 100 },
  { hour: '9a', index: 1, value: 150 },
  { hour: '10a', index: 1, value: 160 },
  { hour: '11a', index: 1, value: 160 },
  { hour: '12a', index: 1, value: 180 },
  { hour: '1p', index: 1, value: 144 },
  { hour: '2p', index: 1, value: 166 },
  { hour: '3p', index: 1, value: 145 },
  { hour: '4p', index: 1, value: 150 },
  { hour: '5p', index: 1, value: 160 },
  { hour: '6p', index: 1, value: 180 },
  { hour: '7p', index: 1, value: 165 },
  { hour: '8p', index: 1, value: 130 },
  { hour: '9p', index: 1, value: 140 },
  { hour: '10p', index: 1, value: 160 },
  { hour: '11p', index: 1, value: 180 },
];

const parseDomain = () => [
  0,
  Math.max(
    Math.max.apply(
      null,
      data01.map((entry) => entry.value),
    ),
    Math.max.apply(
      null,
      data02.map((entry) => entry.value),
    ),
  ),
];

export default function Page  () {
  return (
    <main className='w-max h-screen bg-white flex flex-col items-start overflow-y-scroll scroll-smooth'>
      <header className='bg-[#090909] w-screen h-16 flex px-4 flex-row items-center text-white shadow-md shadow-black sticky'>
        <Badge colorScheme="white" className='mr-2 ' onClick={() => window.history.back()}><IoMdReturnLeft className='text-xl hover:cursor-pointer'/></Badge>
        <h1 className='text-2xl font-bold text-center w-full'>Usage Metrics</h1>
      </header>

      <section className='w-full grid grid-cols-3 font-KulimPark text-lg font-medium'>
        <section className=' col-span-2 p-4 m-12 w-auto h-[400px] border border-gray-400 rounded-lg flex flex-col items-center justify-center shadow-md shadow-gray-400'>
          <h1>Payment History</h1>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              width={500}
              height={400}
              data={dataBar}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="amt" fill="teal" stroke="#8884d8" />
              <Bar dataKey="pv" barSize={20} fill="teal" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              <Scatter dataKey="cnt" fill="red" />
            </ComposedChart>
          </ResponsiveContainer>
        </section>
        <section className=' m-12 w-[400px] h-[400px] border border-gray-400 rounded-lg shadow-md flex flex-col items-center justify-center shadow-gray-400'>
          <h1>Frequent Payments</h1>
          <ResponsiveContainer width="90%" height="90%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={datapie}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="teal" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </section>
        <section className=' m-12 w-[400px] h-[400px] border border-gray-400 rounded-lg shadow-md flex flex-col items-center justify-center shadow-gray-400'>
          <h1>Payment Distribution</h1>
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={dataradial}>
              <RadialBar
                minAngle={15}
                label={{ position: 'insideStart', fill: '#fff' }}
                background
                clockWise
                dataKey="uv"
              />
              <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>
          </ResponsiveContainer>
        </section>
      </section>
    </main>
  )
}

