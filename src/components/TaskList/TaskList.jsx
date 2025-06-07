import React from 'react'

const TaskList = () => {
  return (
    <div id = 'tasklist' className='min-h-[55%] overflow-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrapw-full'>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-700 px-3 py-1 rounded'>High</h3>
                <h4 className='text-base'>20 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus rerum possimus necessitatibus repellat commodi soluta natus, adipisci aperiam error, optio est quisquam. Ducimus consequuntur hic dicta, quo vero velit at?
            </p>
        </div>
         <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-700 px-3 py-1 rounded'>High</h3>
                <h4 className='text-base'>20 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus rerum possimus necessitatibus repellat commodi soluta natus, adipisci aperiam error, optio est quisquam. Ducimus consequuntur hic dicta, quo vero velit at?
            </p>
        </div>
         <div className='flex-shrink-0 h-full w-[300px] bg-green-200 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-700 px-3 py-1 rounded'>High</h3>
                <h4 className='text-base'>20 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus rerum possimus necessitatibus repellat commodi soluta natus, adipisci aperiam error, optio est quisquam. Ducimus consequuntur hic dicta, quo vero velit at?
            </p>
        </div>
    </div>
  )
}

export default TaskList