import React from 'react'

const TaskNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='w-[45%] bg-red-400 px-9 py-6 rounded-sm'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%] bg-blue-300 px-9 py-6 rounded-sm'>
            <h2 className='text-3xl font-semibold'>3</h2>
            <h3 className='text-xl font-medium'>Completed task</h3>
        </div>
        <div className='w-[45%] bg-green-200 px-9 py-6 rounded-sm'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='w-[45%] bg-yellow-400 px-9 py-6 rounded-sm'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskNumbers