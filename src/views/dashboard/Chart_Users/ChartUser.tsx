"use client"

import React from 'react'
import style from './chartUser.module.css'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { userActivitydata as data } from '@/data/userActivityData'

const ChartUser = () => {
  return (
    <div className={style.container}>
        <h2>Weekly Recap User Activity</h2>
        <ResponsiveContainer width="100%" height="90%" className={style.chart}  >
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              
            >
              <XAxis dataKey='name' fontSize={'.8rem'} />
              <YAxis fontSize={'.8rem'} />
              <Tooltip contentStyle={{ backgroundColor: '#151c2c', color: 'white', border: 'none' }} />
              <Legend/>
              <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
            </LineChart>

        </ResponsiveContainer>
    </div>
  )
}

export default ChartUser