import { format, setDate } from 'date-fns'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import { Header, Navbar, SearchItem } from '../components'

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setdate] = useState(location.state.date)
  const [options, setoptions] = useState(location.state.options)

  const [openDate, setOpenDate] = useState(false)

  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex justify-center mt-5 ">
        <div className="w-full h-full w- flex max-w-7xl gap-5">
          <div className="flex-[1] h-full  shadow-lg p-4 rounded-lg sticky top-3 ">
            <p className="text-2xl">Search</p>
            <div className="flex flex-col mb-5">
              <label className="text-2xl font-semibold mb-2" htmlFor="">
                Destination
              </label>
              <input
                className="focus:outline-none px-4 py-2 border-b-2 border-blue-800"
                type="text"
                placeholder={destination}
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-2xl font-semibold mb-2">
                Check-in-Date:{' '}
              </label>
              <span
                className="bg-white  px-4 py-2 cursor-pointer border-b-2 border-blue-800"
                onClick={(e) => setOpenDate(!openDate)}
              >
                {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                  date[0].endDate,
                  'MM/dd/yyyy'
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="flex flex-col mb-5 ">
              <label className="text-lg font-semibold mb-2">Option</label>
              <div className="flex justify-between mb-1 items-center">
                <label className="text-md font-semibold">Min per night: </label>
                <input
                  type="number"
                  className="focus:outline-none px-1 py-2  border-b-2 border-blue-800"
                />
              </div>
              <div className="flex justify-between mb-1 items-center">
                <label className="text-md font-semibold">Max per night: </label>
                <input
                  type="number"
                  className="focus:outline-none px-1 py-2  border-b-2 border-blue-800"
                />
              </div>
              <div className="flex justify-between mb-1 items-center">
                <label className="text-md font-semibold">Adult: </label>
                <input
                  type="number"
                  className="focus:outline-none px-1 py-2  border-b-2 border-blue-800"
                />
              </div>
              <div className="flex justify-between mb-1 items-center">
                <label className="text-md font-semibold">Children: </label>
                <input
                  type="number"
                  className="focus:outline-none px-1 py-2  border-b-2 border-blue-800"
                />
              </div>
              <div className="flex justify-between mb-1 items-center">
                <label className="text-md font-semibold">Room: </label>
                <input
                  type="number"
                  className="focus:outline-none px-1 py-2  border-b-2 border-blue-800"
                />
              </div>
            </div>
            <button className="my-1 py-5 px-2 bg-blue-600 hover:bg-blue-700 text-white duration-200 drop-shadow-lg rounded-full text-xl font-semibold cursor-pointer w-full ">
              Search
            </button>
          </div>
          <div className="flex-[3] ">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
