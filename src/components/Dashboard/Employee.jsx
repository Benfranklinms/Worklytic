import React from 'react'
import Header from '../Other/Header'
import TaskNumbers from '../Other/TaskNumbers'
import TaskList from '../TaskList/TaskList'

const Employee = () => {
  return (
    <div>
        <div className='p-20 bg-[#1c1c1c] min-h-screen'>
            <Header/>
            <TaskNumbers/>
            <TaskList/>
        </div>
    </div>
  )
}

export default Employee