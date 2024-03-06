    import { createSlice } from "@reduxjs/toolkit";

    const cartslices = createSlice({
        name:"cart",
        initialState:{
            items:[],
        },
        reducers:{
            addItem : (state, action)  => {
            state.items.push(action.payload);            
            }, 
            removeItem : (state, action) => {
                const itemNameToRemove = action.payload;
                state.items = state.items.filter(item => item.name !== itemNameToRemove);
            },
            clearCart : (state) => {
                state.items.length = 0;
            },
        },
    });

    export const{addItem, removeItem, clearCart} = cartslices.actions;

    export default cartslices.reducer;
