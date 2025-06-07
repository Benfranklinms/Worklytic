import React from 'react'

const CreateTask = () => {
  return (
     <div className="mt-8 bg-[#1c1f26] p-6 rounded-xl shadow-md">
        <form className="flex flex-wrap gap-6 justify-between">
          <div className="w-full md:w-[48%] space-y-4">
            <div>
              <label className="block mb-1 font-medium">Task Title</label>
              <input
                type="text"
                placeholder="Make a UI design"
                className="w-full p-2 rounded-md bg-[#2a2e39] border border-[#3d414d] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Date</label>
              <input
                type="date"
                className="w-full p-2 rounded-md bg-[#2a2e39] border border-[#3d414d] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Assign to</label>
              <input
                type="text"
                placeholder="Employee name"
                className="w-full p-2 rounded-md bg-[#2a2e39] border border-[#3d414d] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Category</label>
              <input
                type="text"
                placeholder="design, dev, etc"
                className="w-full p-2 rounded-md bg-[#2a2e39] border border-[#3d414d] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="w-full md:w-[48%] space-y-4">
            <div>
              <label className="block mb-1 font-medium">Description</label>
              <textarea
                rows="7"
                placeholder="Task description..."
                className="w-full p-2 rounded-md bg-[#2a2e39] border border-[#3d414d] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-green-700 hover:bg-green-600 font-semibold text-white transition"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask