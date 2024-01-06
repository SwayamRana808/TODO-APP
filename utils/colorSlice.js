import {createSlice} from "@reduxjs/toolkit"
const colorSlice=createSlice({ 
    name:"colors", 
    initialState:[],
    reducers:{
      //what action do we need in our app------------
      addColor(state,action){
        state.push(action.payload)
        // console.log( "why noy running" ,JSON.parse(JSON.stringify(state)))
      },
       changeColor(state,action){
        const index = action.payload;
        const stat=state.map((item,id)=>{
          if(id==index){
          return !item;
          }
          else{
            return item;
          }
        })
        return [...stat]
        console.log("changeColor:", state);
        console.log( "why noy running" ,JSON.parse(JSON.stringify(state)))
      },
      deleteColor(state,action){
        state.splice(action.payload,1);
      }
    }
  }) 
  export const {addColor,changeColor,deleteColor} =colorSlice.actions;
  export default colorSlice.reducer;