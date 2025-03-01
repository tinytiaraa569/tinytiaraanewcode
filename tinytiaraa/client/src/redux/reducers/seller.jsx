import { createReducer } from "@reduxjs/toolkit";
// import  isAuthenticated  from "../../../../backend/middleware/auth";

const initialState ={
    isLoading:true,
    isSeller: false,
    seller: null,
    error: null,
}


export const sellerReducer = createReducer(initialState,(builder)=>{
    builder.addCase("LoadSellerRequest",(state)=>{
        state.isLoading= true


    })
    .addCase("LoadSellerSuccess",(state,action)=>{
        state.isSeller = true
        state.isLoading = false
        state.seller = action.payload

    })
    
    .addCase('LoadSellerFail', (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isSeller = false;
    })
    .addCase('clearErrors', (state) => {
        state.error = null;
    });
})

