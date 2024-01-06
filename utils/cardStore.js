import colorSlice from "./colorSlice";
import userSlice from "./slice";
import {configureStore} from "@reduxjs/toolkit"
 
const storeValt=configureStore({
    reducer:{
        users:userSlice,//userSlice.reducer
        colors:colorSlice
    }
})
export default storeValt;