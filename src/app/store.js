// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from './features/authSlice'

// export const store = configureStore({
//   reducer: {
//     auth: authReducer
//   }
// })

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import userReducer from "./features/user/userSlice"
import assetsReducer from "./features/assets/assetsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    assets: assetsReducer
  }
})