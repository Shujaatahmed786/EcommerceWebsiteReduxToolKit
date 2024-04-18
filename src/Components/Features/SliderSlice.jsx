import { createSlice , configureStore } from '@reduxjs/toolkit'

const SliderSlice = createSlice({
    name: "Slider",
    initialState:{
        value: 0,
        length: 4,
    },
    reducers:{
        nextSlide(){},
        prevSlide(){},
        dotSlide(){},
    }
})


export const { nextSlide, prevSlide, dotSlide} = SliderSlice.actions;
export default SliderSlice.reducer