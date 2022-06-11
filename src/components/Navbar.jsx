import React from 'react'

const Navbar = () => {
  return (
    <div className="h-16 bg-slate-50 flex justify-center drop-shadow-md">
      <div className="w-full max-w-7xl text-dark flex items-center justify-between">
        <span className="font-bold text-3xl text-violet-800 ">BookingApi</span>
        <div className="font-semibold text-1xl">
          <button className=" px-2 py-1 text-dark cursor-pointer hover:drop-shadow-lg hover:bg-violet-100	 md:rounded-lg 	">
            Register
          </button>
          <button className="ml-6 px-2 py-1 rounded-sm text-dark cursor-pointer hover:drop-shadow-lg hover:bg-violet-100	 md:rounded-lg 	">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
