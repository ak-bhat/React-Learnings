import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{     
                //action:reducer fn
                //Modifies the state
            state.items.push(action.payload)
        },
        removeItem:(state, action)=>{
            state.items.pop()
        }, 
        clearCart:(state, action)=>{
            state.items.length = 0;    // Empty array
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions  // Export actions

export default cartSlice.reducer;   //export reducers