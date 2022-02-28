import { createSlice } from "@reduxjs/toolkit"

const initState = {
    id: "123",
    username: "Phuoc Long",
    avatar: "https://picsum.photos/200",
    listFriends: [
        {
            id: 1,
            name: "Buji khalifa",
            avatar: "https://picsum.photos/200",
            offline: false,
        },
        {
            id: 2,
            name: "Man",
            avatar: "https://picsum.photos/200",
            offline: 3,
        },
        {
            id: 3,
            name: "Long",
            avatar: "https://picsum.photos/200",
            offline: 3,
        },
        {
            id: 4,
            name: "KKKK",
            avatar: "https://picsum.photos/200",
            offline: 3,
        },
        {
            id: 5,
            name: "khung",
            avatar: "https://picsum.photos/200",
            offline: 3,
        }, {
            id: 6,
            name: "cusfas",
            avatar: "https://picsum.photos/200",
            offline: 3,
        }, {
            id: 7,
            name: "Ukraina",
            avatar: "https://picsum.photos/200",
            offline: 3,
        }, {
            id: 8,
            name: "Nga",
            avatar: "https://picsum.photos/200",
            offline: 3,
        }, {
            id: 9,
            name: "USA",
            avatar: "https://picsum.photos/200",
            offline: 3,
        }, {
            id: 10,
            name: "GER",
            avatar: "https://picsum.photos/200",
            offline: 3,
        }, {
            id: 11,
            name: "Paskitan",
            avatar: "https://picsum.photos/200",
            offline: 3,
        },
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
