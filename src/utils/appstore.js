import { configureStore } from "@reduxjs/toolkit";
import cartslicesReducer from "./cartslices";




const appstore = configureStore({
    reducer : {
       cart : cartslicesReducer,
    }
});


export default appstore;