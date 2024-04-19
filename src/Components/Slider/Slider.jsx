import React from 'react'
import {nextSlide, prevSlide, dotSlide} from '../../Components/Features/Slices/SliderSlice'
import {useSelector, useDispatch} from 'react-redux'

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider?.value);
  console.log("slideIndex", slideIndex)
  const dispatch = useDispatch()
  return (
  <div>
    <button onClick={()=>dispatch(nextSlide(slideIndex + 1))}>Next</button>
    <button onClick={()=>dispatch(prevSlide(slideIndex - 1))}>Prev</button>
  </div>
  );
}
export default Slider