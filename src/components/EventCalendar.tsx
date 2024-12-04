'use client'

import Image from 'next/image'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

type ValuePrice = Date | null

type Value = ValuePrice | [ValuePrice, ValuePrice]

const events = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quas.',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quas.',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quas.',
  },
]

const EventCalendar = () => {
  const [value, setValue] = useState<Value>(null)
  return (
    <div className='bg-white p-4 rounded-md'>
      <Calendar value={value} onChange={setValue} />
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-semibold my-4'>Events</h1>
          <Image src='/moreDark.png' alt='' width={20} height={20} />
        </div>
        {events.map((event) => (
          <div key={event.id} className='p-5 rounded-md border-2 border-gray-100 botder-t-4 odd:border-t-lamaSky even:border-t-lamaPurple'>
            <div className='flex items-center justify-between gap-4'>
              <h1 className='text-gray-600 font-semibold'>{event.title}</h1>
              <span className='text-gray-300 text-xs'>{event.time}</span>
            </div>
            <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCalendar
