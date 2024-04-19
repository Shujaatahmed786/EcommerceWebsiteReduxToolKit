import {configureStore} from '@reduxjs/toolkit'
import SliderReducer from '../Components/Features/Slices/SliderSlice'


const Store = configureStore({
    reducer:{
        Slider:SliderReducer,

    },
})

export default Store