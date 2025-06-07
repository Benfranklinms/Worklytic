import React from 'react'
import Header from '../Other/Header'

const Admin = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header/>
      <div>
        <form className='flex items-start justify-between '>
          <h3>Task Title</h3>
          <input type="text" placeholder='Make a ui design'/>
          <h3>Task Description</h3>
          <textarea></textarea>
          <h3>Date</h3>
          <input type="date"/>
          <h3>Assign to</h3>
          <input type="text" placeholder='Employee name'/>
          <h3>Category</h3>
          <input type="text" placeholder='design, dev, etc'/>
          <button>Create task</button>
        </form>
      </div>
    </div>
  )
}

export default Admin