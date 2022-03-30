import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../Redux/Reducers/user";
import { searchReducer } from "../Redux/Reducers/search";


const store = configureStore({
    reducer: {
      user: userReducer,
      search: searchReducer
      // products: productReducer,
      // cart: cartReducer
    },
  });


export default store;