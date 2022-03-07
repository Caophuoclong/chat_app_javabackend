import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/user.slice"
import messageReducer from "./slices/message.slice"
export default configureStore({
    reducer: {
        user: userReducer,
        message: messageReducer,
    }
})