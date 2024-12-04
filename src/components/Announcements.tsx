const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-semibold'>Announcements</h1>
        <span className='text-xs text-gray-400'>View all</span>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='bg-lamaSkyLight p-4 rounded-md'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem ipsum dolor sit amet.</h2>
            <span className='text-xs text-gray-400 bg-white rounded-md p-1'>2024-13-02</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, repellendus!</p>
        </div>
        <div className='bg-lamaPurpleLight p-4 rounded-md'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem ipsum dolor sit amet.</h2>
            <span className='text-xs text-gray-400 bg-white rounded-md p-1'>2024-13-02</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, repellendus!</p>
        </div>
        <div className='bg-lamaYellowLight p-4 rounded-md'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem ipsum dolor sit amet.</h2>
            <span className='text-xs text-gray-400 bg-white rounded-md p-1'>2024-13-02</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, repellendus!</p>
        </div>
      </div>
    </div>
  )
}

export default Announcements
