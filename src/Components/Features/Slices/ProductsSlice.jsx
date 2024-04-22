import { createSlice } from "@reduxjs/toolkit";
import  storeData  from "../../../assets/data/dummyData"


const ProductSlice = createSlice({
    name:"Products",
    initialState:{ 
        filterProducts: JSON.parse(sessionStorage.getItem("filteredData")) || storeData},
    reducer:{
        filteredProducts(state,action){
            try{
                const filter = storeData.filter((products) => products.type === action.payload)
                state.filteredProducts = filter;
                state.error = false;
                console.log(filter ,'filter')
                const savedState = JSON.stringify(filter);
                sessionStorage.setItem('filteredData', savedState)
              }  catch(err){
                    return(err);

                }
            }
        }
    }

);
export const {filterProducts} = ProductSlice.actions
export default ProductSlice.reducer