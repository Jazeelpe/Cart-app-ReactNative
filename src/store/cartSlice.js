import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    products: [],
  },
  reducers: {
    ADDITEM: (state, action) => {
      const newobj = {
        id: action.payload.id,
        image: action.payload.image,
        name: action.payload.name,
        brand: action.payload.brand,
        price: action.payload.price,
        qty: action.payload.qty,
      };

      if (state.cartItems.length === 0) {
        state.cartItems.push(newobj);
      } else
        state.cartItems.map(item => {
          item.id === action.payload.id
            ? (item.qty = item.qty + 1)
            : state.cartItems.push(newobj);
        });
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
