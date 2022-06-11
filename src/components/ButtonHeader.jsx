const ButtonHeader = ({ title, quantity, handleOption, buttonName }) => {
  return (
    <div className="flex w-40 justify-between items-center ">
      <span className="font-semibold">{title}</span>
      <div className="flex gap-4 justify-center items-center border-l border-neutral-800 pl-1">
        <button
          className="flex items-center justify-center text-2xl font-black hover:bg-neutral-200 p-1 hover:rounded-lg"
          onClick={() => handleOption(buttonName, 'd')}
          disabled={quantity <= 0}
        >
          -
        </button>
        <span className="text-lg">{quantity}</span>
        <button
          className="flex items-center justify-center text-2xl font-black hover:bg-neutral-200 p-1 hover:rounded-lg"
          onClick={() => handleOption(buttonName, 'i')}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ButtonHeader
