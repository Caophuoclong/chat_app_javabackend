import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./reducers/user.slice"
import messageReducer from "./reducers/message.slice"
export default configureStore({
    reducer: {
        user: userReducer,
        message: messageReducer,
    }
})