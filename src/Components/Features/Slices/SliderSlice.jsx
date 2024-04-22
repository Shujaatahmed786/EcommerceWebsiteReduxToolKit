import { createSlice } from '@reduxjs/toolkit'
import  sliderData  from '../../../assets/data/dummyData'

const SliderSlice = createSlice({
    name: "Slider",
    initialState:{
        value: 0,
        length: sliderData.length,
    },
    reducers:{
        nextSlide(state,action){
            console.log("action", action);
            console.log("state" , state);
            state.value = action.payload > state.length - 1 ? 0 : action.payload
        },
        prevSlide(state,action){
            state.value = action.payload < 0 ? state.length - 1 : action.payload

        },
        dotSlide(){
            const slide = action.payload;
            state.value = slide;
        },
    }
})


export const { nextSlide, prevSlide, dotSlide} = SliderSlice.actions;
export default SliderSlice.reducer
