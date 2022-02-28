import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: "message-slice",
    initialState: {
        name: "",
        avatar: "",
        message: [
            {
                id: "1234",
                sender: "1",
                receiver: "123",
                content: "lorem ipsum",
            },
            {
                id: "1235",
                sender: "123",
                receiver: "1",
                content: "Hello",
            },
            {
                id: "1234",
                sender: "1",
                receiver: "123",
                content: "lorem ipsum",
            },
            {
                id: "1235",
                sender: "123",
                receiver: "1",
                content: "Hello",
            },
            {
                id: "1234",
                sender: "1",
                receiver: "123",
                content: "lorem ipsum",
            },
            {
                id: "1235",
                sender: "123",
                receiver: "1",
                content: "Hello",
            },
            {
                id: "1234",
                sender: "1",
                receiver: "123",
                content: "lorem ipsum",
            },
            {
                id: "1235",
                sender: "123",
                receiver: "1",
                content: "Hello",
            },

        ],
        choosing: "",
        offline: false | 3,
    },
    reducers: {
        choose: (state, action) => {
            console.log(action.payload);
            return {
                ...state,
                choosing: action.payload.id,
                name: action.payload.name,
                avatar: action.payload.avatar,
                offline: action.payload.offline
            }
        }

    }
});

export const { choose } = messageSlice.actions;
export default messageSlice.reducer;