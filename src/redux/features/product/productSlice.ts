import { createSlice } from '@reduxjs/toolkit'

type TItemState={
    productIds:string[] | [];
}
const initialState:TItemState={
    productIds:[]
}
export const productSlice=createSlice({
    name:'selectItem',
    initialState,
    reducers:{
    selectProduct:(state,action)=>{
     const  values=action.payload;
     state.productIds=values
    },
    removeProductFromState:(state)=>{
        state.productIds=[];
    }

    }
})

export const {selectProduct,removeProductFromState}=productSlice.actions;
export default productSlice.reducer;