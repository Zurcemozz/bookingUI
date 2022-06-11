import React from 'react'
import { AiFillCar } from 'react-icons/ai'
import { FaBed } from 'react-icons/fa'
import { GiAirplaneDeparture } from 'react-icons/gi'
import { MdCarRental, MdOutlineTour } from 'react-icons/md'
const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl mx-4 mt-6 flex justify-center items-center flex-col">
        <div className="flex gap-40 text-lg font-semibold">
          <div className="flex justify-center items-center gap-2 hover:cursor-pointer hover:drop-shadow-lg hover:bg-violet-100	 md:rounded-lg px-4 py-2">
            <FaBed />
            <span>Stay</span>
          </div>
          <div className="flex justify-center items-center gap-2 hover:cursor-pointer hover:drop-shadow-lg hover:bg-violet-100	 md:rounded-lg px-4 py-2">
            <GiAirplaneDeparture />
            <span>Flights</span>
          </div>
          <div className="flex justify-center items-center gap-2 hover:cursor-pointer hover:drop-shadow-lg hover:bg-violet-100	 md:rounded-lg px-4 py-2">
            <AiFillCar />
            <span>Car Rentals</span>
          </div>
          <div className="flex justify-center items-center gap-2 hover:cursor-pointer hover:drop-shadow-lg hover:bg-violet-100	 md:rounded-lg px-4 py-2">
            <MdOutlineTour />
            <span>Tour</span>
          </div>
          <div className="flex justify-center items-center gap-2 hover:cursor-pointer hover:drop-shadow-lg hover:bg-violet-100	 md:rounded-lg px-4 py-2">
            <MdCarRental />
            <span>Rentals</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
