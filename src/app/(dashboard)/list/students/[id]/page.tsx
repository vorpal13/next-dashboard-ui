import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import Performance from '@/components/Performance'
import Image from 'next/image'
import Link from 'next/link'

const userInfo = [
  {
    src: '/blood.png',
    title: 'A+',
  },
  {
    src: '/date.png',
    title: 'January 2025',
  },
  {
    src: '/mail.png',
    title: 'user@gmail.com',
  },
  {
    src: '/phone.png',
    title: '1234567890',
  },
]

const cards = [
  {
    title: 'Attendance',
    src: '/singleAttendance.png',
    count: '96%',
  },
  {
    title: 'Branches',
    src: '/singleBranch.png',
    count: 2,
  },
  {
    title: 'Grade',
    src: '/singleLesson.png',
    count: 6,
  },
  {
    title: 'Class',
    src: '/singleClass.png',
    count: 3,
  },
]

const SingleStudentPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
      {/* LEFT */}
      <div className='w-full xl:w-2/3'>
        {/* TOP */}
        <div className='flex flex-col lg:flex-row gap-4'>
          {/* USER INFO CARD */}
          <div className='bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4'>
            <div className='w-1/3'>
              <Image
                src='https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200'
                alt='avatar'
                width={144}
                height={144}
                className='w-36 h-36 rounded-full object-cover'
              />
            </div>
            <div className='w-2/3 flex flex-col justify-between gap-4'>
              <h1 className='text-xl font-semibold'>Leonard Hofstadter</h1>
              <p className='text-sm text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, rerum!
              </p>
              <div className='flex gap-2 flex-wrap text-xs font-medium items-center justify-between'>
                {userInfo.map(({ src, title }) => (
                  <div
                    key={src}
                    className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'
                  >
                    <Image src={src} alt='' width={14} height={14} />
                    <span>{title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className='flex-1 flex gap-4 justify-between flex-wrap'>
            {cards.map(({ title, src, count }) => (
              <div
                key={title}
                className='bg-white w-full rounded-md flex gap-4 p-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]'
              >
                <Image src={src} alt='' width={24} height={24} className='w-6 h-6' />
                <div className=''>
                  <h1 className='text-xl font-semibold'>{count}</h1>
                  <span className='text-sm text-gray-400'>{title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* BOTTOM */}
        <div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
          <h1>Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className='w-full xl:w-1/3 flex flex-col gap-4'>
        <div className='bg-white p-4 rounded-md'>
          <h1 className='text-xl font-semibold'>Shortcuts</h1>
          <div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-500'>
            <Link className='p-3 rounded-md bg-lamaSkyLight' href='/'>
              Student&apos;s Lessons
            </Link>
            <Link className='p-3 rounded-md bg-lamaPurpleLight' href='/'>
              Student&apos;s Teachers
            </Link>
            <Link className='p-3 rounded-md bg-lamaYellowLight' href='/'>
              Student&apos;s Results
            </Link>
            <Link className='p-3 rounded-md bg-pink-50' href='/'>
              Student&apos;s Exams
            </Link>
            <Link className='p-3 rounded-md bg-lamaSkyLight' href='/'>
              Student&apos;s ASsignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  )
}

export default SingleStudentPage
