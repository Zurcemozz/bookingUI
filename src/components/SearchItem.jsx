const SearchItem = () => {
  return (
    <div className="flex justify-between gap-4 mb-4 border-2 p-4 drop-shadow-2xl">
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="object-cover bg-no-repeat bg-center w-64  h-64 rounded-t-lg "
      />
      <div className="flex flex-col gap-3 flex-[2]">
        <p className="text-2xl font-semibold">Tower Street Apartment</p>
        <p>500 m</p>
        <p className="bg-violet-800 text-white max-w-max px-1 py-1 rounded-lg">
          Free airprot taxi
        </p>
        <p className="text-sm font-bold">Studio with Air Condition</p>
        <p className="text-md">Entire Studio • 1 Bathroom • 21m 1 full bed</p>
        <p>Free cancellation</p>
        <p className="">
          You can cancel later so lock in this great price today
        </p>
      </div>
      <div className="flex-[1] flex flex-col justify-between">
        <div className="flex justify-between ">
          <span className="text-2xl font-semibold ">Excellent</span>
          <button className="p-2 rounded-full font-black text-white bg-indigo-600">
            9.0
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold">$3.99</p>
          <p className="text-sm text-neutral-600">
            Includes and taxes and fees
          </p>
          <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 font-semibold text-white">
            Check Availablity
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
