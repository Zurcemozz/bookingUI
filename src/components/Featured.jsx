const Featured = () => {
  return (
    <div className="w-full max-w-7xl flex justify-space-between gap-4">
      <div className="relative text-white  drop-shadow-lg h-64">
        <img
          src="https://images.unsplash.com/photo-1511515828069-1e4853d8b336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
          className="w-full object-cover"
        />
        <div className="absolute bottom-5 left-4">
          <p className="text-7xl">Dublin</p>
          <p className="text-5xl">123 Properties</p>
        </div>
      </div>
    </div>
  )
}

export default Featured
