import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./reducers/user.slice"
export default configureStore({
    reducer: {
        user: userReducer,
    }
})