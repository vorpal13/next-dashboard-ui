'use client'
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK)

  const handleOnChangeView = (view: View) => {
    setView(view)
  }

  return (
    <Calendar
      localizer={localizer}
      views={['work_week', 'day']}
      events={calendarEvents}
      startAccessor='start'
      endAccessor='end'
      style={{ height: '98%' }}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
      view={view}
      onView={handleOnChangeView}
    />
  )
}

export default BigCalendar
