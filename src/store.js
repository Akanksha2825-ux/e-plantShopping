// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Adjust the import path to where your CartSlice.js is located

// Configure the store
const store = configureStore({
  reducer: {
    cart: cartReducer, // 'cart' is the key that will be used to reference the cart state in your app
  }
});

export default store;
