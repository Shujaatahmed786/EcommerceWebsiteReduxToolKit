import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../Components/Features/Slices/SliderSlice";
import { useSelector, useDispatch } from "react-redux";
import sliderData from "../../assets/data/dummyData";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider?.value);
  console.log("slideIndex", slideIndex);
  const dispatch = useDispatch();
  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((item, index) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {parseInt(item.id) === slideIndex &&
                <img src={item.img} alt="shoes"
                className="h-[850px] w-full" />}
              </div>
              <div className="absolute top-44 mx-auto inset-x-1/4">
                <p className="text-white text-4xl font-inter font-bold">
                  {parseInt(item.id) === slideIndex && item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex absolute bottom-12 left-[45%]">
        {sliderData.map((dot, index) => {
          return (
            <div className="mr-4" key={dot.id}>
              <div
                className={
                  index === slideIndex
                    ? "bg-green-300 rounded-full p-4 cursor-pointer"
                    : "bg-white rounded-full p-4 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide.index)}
              ></div>
            </div>
          );
        })}
      </div>
      <button
        className="absolute top-[50%] right-5 p-2 bg-white rounded-full hover:bg-green-400"
        onClick={() => dispatch(nextSlide(slideIndex + 1))}
      >
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

      </button>
      <button className="absolute top-[50%] left-5 p-2 bg-white rounded-full hover:bg-green-400"
       onClick={() => dispatch(prevSlide(slideIndex - 1))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
     </svg>
     
</button>
    </div>
  );
};
export default Slider;
