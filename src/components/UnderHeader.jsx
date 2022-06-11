import { format } from 'date-fns'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { FaBed } from 'react-icons/fa'
import { FcCalendar, FcSearch } from 'react-icons/fc'
import { HiUserGroup } from 'react-icons/hi'
import BackgroundIsland from '../assets/island.jpg'
import ButtonHeader from './ButtonHeader'
const UnderHeader = () => {
  const [openDate, setOpenDate] = useState(false)
  const [openOptions, setOpenOptions] = useState(false)

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  const handleOption = (name, operation) => {
    // ang nagyayari dito is kukunin ko ung previous state in line 23, then i iwill immediatley return it, after that automatic inside the bracket un ung name ung name, kumbaga sa php name="name" so ung
    //ung option naman dito, un ung kincall ko ung mismong state, example, knilick ko ung sa adult, ang makukuha kong object is ung adult which is equal
    //options[name] --> adult: 1+1 or 1-1
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  return (
    <div className="w-screen h-80 max-h-7xl drop-shadow-lg">
      <div
        className="w-full h-full mt-5 bg-no-repeat bg-cover bg-center opacity-100 bg-neutral-800  bg-blend-overlay flex items-center justify-center "
        style={{ backgroundImage: `url(${BackgroundIsland})` }}
      >
        <div className="flex items-center justify-evenly p-4 w-3/4 h-16 text-lg border-2 border-white/[.2] bg-white/[.08] rounded-full">
          <div className="flex gap-3 items-center  justify-center text-white">
            <FaBed size={36} className="" />
            <input
              type="text"
              placeholder="Location..."
              className="px-3 border-b-2 py-1 text-dark focus:outline-none w-72 bg-transparent cursor-pointer"
            />
          </div>
          <div className="flex gap-3 cursor-pointer text-white items-center relative justify-center">
            <FcCalendar size={36} className="text-white" />
            <p onClick={() => setOpenDate(!openDate)}>
              {`${format(date[0].startDate, 'MM/dd/yyyy')}`}
              <span className="mx-2 font-thin">to</span>
              {`${format(date[0].endDate, 'MM/dd/yyyy')}`}
            </p>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="absolute top-[50px]"
              />
            )}
          </div>
          <div className="flex gap-3 text-white items-center justify-center relative">
            <HiUserGroup size={36} className="" />
            <p
              className="cursor-pointer"
              onClick={() => setOpenOptions(!openOptions)}
            >{`${options.adult} adult • ${options.children} children • ${options.room} room`}</p>
            {openOptions && (
              <div className="absolute top-[50px] bg-white text-gray-800 rounded-sm px-3 py-4 drop-shadow-2xl">
                {/* This is person choose */}
                <ButtonHeader
                  title="Adult"
                  buttonName="adult"
                  quantity={options.adult}
                  handleOption={handleOption}
                />
                <ButtonHeader
                  disabled={options.children <= 1}
                  title="Children"
                  buttonName="children"
                  quantity={options.children}
                  handleOption={handleOption}
                />
                <ButtonHeader
                  disabled={options.room <= 1}
                  title="Room"
                  buttonName="room"
                  quantity={options.room}
                  handleOption={handleOption}
                />
              </div>
            )}
          </div>
          <div className="flex gap-1 cursor-pointer bg-blue-200 hover:bg-blue-300 duration-300 rounded-full px-4 py-3 items-center justify-center">
            <FcSearch size={24} className="" />
            <p className="text-lg font-bold">Search</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnderHeader
