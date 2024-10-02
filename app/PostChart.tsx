'use client'
import React from 'react'
// import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  DefaultLegendContent,
  ResponsiveContainer,
} from 'recharts';

interface PostChartProps {
  open: number;
  inProgress: number;
  closed: number;
}

const PostChart = ({ open, inProgress, closed }: PostChartProps) => {

  const data = [
    { label: 'Open', value: open },
    { label: 'In Progress', value: inProgress },
    { label: 'Closed', value: closed },
  ]

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Tooltip content={<DefaultLegendContent />} />
          <Area
            dataKey="value"
            fill="#8884d8"
            stroke="#8884d8"
            type="monotone"
            connectNulls
            dot={false}
            activeDot={false}
          />
          <Legend content={<DefaultLegendContent />} />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  )
}

export default PostChart
