import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import the cart reducer

// Configure the Redux store
const store = configureStore({
    reducer: {
        cart: cartReducer, // Add the cart reducer to the store
    },
});

// Export the configured store
export default store;
