import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Slider from '../Slider/Slider'
import NavigateButtons from '../NavigationButton/NavigationButton'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FilteredProduct from '../FilteredProduct/FilteredProudct'


const Main = () => {
  return (
      <BrowserRouter>
      <div>
        <Navbar/>
        <Slider />
        <NavigateButtons/>
        <Routes>
          <Route path='/filterproducts/:type' element={<FilteredProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Main