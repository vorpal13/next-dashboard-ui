'use client'
import Image from 'next/image'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Rectangle } from 'recharts'

const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 24,
  },
  {
    name: 'Tue',
    present: 30,
    absent: 13,
  },
  {
    name: 'Wed',
    present: 20,
    absent: 56,
  },
  {
    name: 'Thu',
    present: 20,
    absent: 39,
  },
  {
    name: 'Fri',
    present: 10,
    absent: 48,
  },
]

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg h-full p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20} />
      </div>
      <ResponsiveContainer width='100%' height='90%'>
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#ddd' />
          <XAxis dataKey='name' axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
          <YAxis axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }} />
          <Bar dataKey='absent' fill='#fae27c' legendType='circle' radius={[10, 10, 0, 0]} />
          <Bar dataKey='present' fill='#c3ebfa' legendType='circle' radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart
