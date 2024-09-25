import { createSlice } from '@reduxjs/toolkit'

type TMyState={
    isDuplicate:boolean;
}
const initialState:TMyState={
    isDuplicate:false
}
export const myStateSlice=createSlice({
    name:'myState',
    initialState,
    reducers:{
    setMyState:(state,action)=>{
     const  values=action.payload;
     state.isDuplicate=values
    }

    }
})

export const {setMyState}=myStateSlice.actions;
export default myStateSlice.reducer;