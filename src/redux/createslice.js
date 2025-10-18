import {createSlice} from '@reduxjs/toolkit';



const cardslice = createSlice({
    name:'cardReducer',
    initialState:{
        cartitem:[],
        wishlistitem:[]
    },
    reducers:{
        addTocart:(state,action)=>{
            state.cartitem.push(action.payload);

        },
        removeFromcart:(state,action)=>{
            state.cartitem=state.cartitem.filter((item)=>item.id !== action.payload.id);
        },
        addTowishlist:(state,action)=>{
            state.wishlistitem.push(action.payload);
        },
        removeFromwishlist:(state,action)=>{
            state.wishlistitem=state.wishlistitem.filter((item)=>item.id !== action.payload.id);
        },
    }
});
export const {addTocart,removeFromcart,addTowishlist,removeFromwishlist} = cardslice.actions;
export default cardslice.reducer;