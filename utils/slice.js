import {createSlice} from "@reduxjs/toolkit"
const userSlice=createSlice({ 
    name:"user", 
    initialState:[],
    reducers:{
      //what action do we need in our app------------
      addNote(state,action){
        state.push(action.payload)
        console.log(action.payload)
      },
      removeNote(state,action){
        state.splice(action.payload,1);
        console.log(action)
      },
      Manymore(state){}
    }
  }) 
  export const {addNote,removeNote} =userSlice.actions;
  export default userSlice.reducer;