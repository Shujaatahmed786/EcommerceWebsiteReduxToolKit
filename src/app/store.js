import {configureStore} from '@reduxjs/toolkit'
import SliderReducer from '../Components/Features/Slices/SliderSlice'
import ProductsReducer from '../Components/Features/Slices/ProductsSlice'


const Store = configureStore({
    reducer:{
        slider:SliderReducer,
        product:ProductsReducer,

    },
})

export default Store