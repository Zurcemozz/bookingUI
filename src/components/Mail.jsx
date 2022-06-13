const Mail = () => {
  return (
    <div className="w-full mt-12 bg-violet-200 flex flex-col items-center gap-4 p-12">
      <p className="text-4xl font-semibold uppercase">
        Get the lowest deal right now!
      </p>
      <p className="text-2xl text-gray-700">
        Sign up and we'll send you the most afforable price!
      </p>
      <div className="">
        <input
          className=" text-color-800 w-72 h-8 p-8 text-lg focus:outline-none "
          type="text"
          placeholder="Email"
        />
        <button className="p-5 font-bold text-white  bg-violet-400">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Mail
