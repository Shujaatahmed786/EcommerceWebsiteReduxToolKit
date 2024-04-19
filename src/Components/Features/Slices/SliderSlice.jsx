import { createSlice } from '@reduxjs/toolkit'

const SliderSlice = createSlice({
    name: "Slider",
    initialState:{
        value: 0,
        length: 4,
    },
    reducers:{
        nextSlide(state,action){
            console.log("action", action);
            console.log("state" , state);
            state.value = action.payload > state.length ? 0 : action.payload
        },
        prevSlide(state,action){
            state.value = action.payload < 0 ? state.length : action.payload

        },
        dotSlide(){},
    }
})


export const { nextSlide, prevSlide, dotSlide} = SliderSlice.actions;
export default SliderSlice.reducer
