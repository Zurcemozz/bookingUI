import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {} from 'react-icons/bs'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

import { GrFormLocation } from 'react-icons/gr'
import { Footer, Header, Mail, Navbar } from '../components'
const SingleHotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setopen] = useState(false)
  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
    },
  ]

  const handleOpen = (i) => {
    setSlideNumber(i)
    setopen(!open)
  }
  const handleMove = (direction) => {
    let newSlideNumber
    if (direction === 'left') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex items-center flex-col mt-5  ">
        {open && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-neutral-800/[.6] z-[9999] flex items-center">
            <AiOutlineClose
              className="absolute top-5 right-5 text-3xl text-white cursor-pointer"
              onClick={() => setopen(!open)}
            />
            <FaArrowCircleLeft
              className="m-5 text-7xl text-white cursor-pointer"
              onClick={() => handleMove('left')}
            />
            <div className="w-full h-full flex justify-center items-center">
              <img
                src={photos[slideNumber].src}
                alt=""
                className="w-[60%] h-[80vh]"
              />
            </div>
            <FaArrowCircleRight
              className="m-5 text-7xl text-white cursor-pointer"
              onClick={() => handleMove('right')}
            />
          </div>
        )}
        <div className="w-full max-w-7xl justify-between flex flex-col gap-4 relative">
          <button className="absolute top-0 right-0 bg-blue-600 hover:bg-blue-700 text-white px-2 py-3 font-semibold rounded-lg">
            Reserve or book now
          </button>
          <p className="text-2xl">Grand Hotel</p>
          <div className="text-xl flex items-center gap-3">
            <GrFormLocation />
            <span>Elton St 125</span>
          </div>
          <span className="text-lg text-blue-600 font-semibold">
            Execllent location - 500m
          </span>
          <span className="text-lg text-blue-600 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, recusandae.
          </span>
          <div className="flex flex-wrap space-between ">
            {photos.map((photo, i) => (
              <div key={i} className="w-[33%]">
                <img
                  className="w-full cursor-pointer object-cover gap-1"
                  src={photo.src}
                  onClick={() => handleOpen(i)}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between gap-5 mt-5">
            <div className="flex-[3]">
              <p className="text-3xl font-bold my-2 uppercase">
                Stay in the heart of Krakow
              </p>
              <p className="text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit cum placeat quidem vel. Repellat minima placeat illum?
                Eaque similique nisi commodi in temporibus. Nostrum voluptatum
                exercitationem officia illum repellendus dignissimos provident
                voluptatibus itaque impedit quasi quisquam architecto ipsum
                unde, laborum autem, corporis deleniti velit veritatis voluptate
                debitis suscipit, totam sint.
              </p>
            </div>
            <div className="flex-[1] flex flex-col p-4 shadow-xl border-2 border-neutral-200 rounded-lg justify-between items-center">
              <h1 className="text-3xl font-bold uppercase">
                Perfect Stay for 9 months
              </h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, exercitationem.
              </span>
              <p className="text-3xl font-bold my-4">$3.99</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-2 py-3 rounded-lg font-semibold">
                Reserve for booking now{' '}
              </button>
            </div>
          </div>
        </div>
        <Mail />
        <Footer />
      </div>
    </div>
  )
}

export default SingleHotel
