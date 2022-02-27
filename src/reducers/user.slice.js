import { createSlice } from "@reduxjs/toolkit"

const initState = {
    username: "",
    avatar: "",
    listFriends: [
        {
            name: "Buji khalifa",
            avatar: "https://picsum.photos/200",
            offline: 3,
        }
    ],

}
export const userSlice = createSlice({
    name: "user-slice",
    initialState: initState,
    reducers: {
        initUser: (state, action) => {
            state.username = action.payload.username;
            state.avatar = action.payload.avatar;
        }
    }
})

export const { initUser } = userSlice.actions;
export default userSlice.reducer;
