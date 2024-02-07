import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    products: [],
  },
  reducers: {
    ADDITEM: (state, action) => {
      let itemInside = false;
      state.cartItems.forEach(item => {
        if (item.id === action.payload.id) {
           itemInside = true;
        }
      });
      if (itemInside === false) {
        const updated = {...action.payload, qty: action.payload.qty + 1};
        state.cartItems.push(updated);
      } else {
       console.log("my"+state.cartItems)
        
      }
    },
    PRODUCTLIST: (state, action) => {
      state.products.push(action.payload);
    },
    UPDATEQTY: (state, action) => {
      const updatedlist = [...state.products, action.payload];
      state.products = updatedlist;
    },
  },
});
export const {ADDITEM, PRODUCTLIST, UPDATEQTY} = cartSlice.actions;
export default cartSlice.reducer;
