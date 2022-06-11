import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Homepage, List, SingleHotel } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<SingleHotel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
