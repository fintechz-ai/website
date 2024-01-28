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

export default function Page  () {
  return (
    <main className='w-screen h-screen bg-white flex flex-col items-start'>
      <header className='bg-[#090909] w-screen h-16 flex px-4 flex-row items-center text-white shadow-md shadow-black sticky'>
        <Badge colorScheme="white" className='mr-2 ' onClick={() => window.history.back()}><IoMdReturnLeft className='text-xl hover:cursor-pointer'/></Badge>
        <h1 className='text-2xl font-bold text-center w-full'>Usage Metrics</h1>
      </header>

      <section className='w-full grid grid-cols-3'>
        <section className=' col-span-2 p-4 m-12 w-auto h-[400px] border border-gray-400 rounded-lg shadow-md shadow-gray-400'>
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
        <section className='p-4 m-12 w-[400px] h-[400px] border border-gray-400 rounded-lg shadow-md shadow-gray-400'>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={datapie}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="teal" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </section>
      </section>
    </main>
  )
}

