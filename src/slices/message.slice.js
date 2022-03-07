import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: "message-slice",
    initialState: {
        name: "",
        avatar: "",
        message: [
            {
                id: "1234",
                source: "1",
                destination: "123",
                content: "lorem ipsum",
                time: 1646037825
            },
            {
                id: "1235",
                source: "123",
                destination: "1",
                content: "Hello",
                time: 1646037836
            },
            {
                id: "1234",
                source: "1",
                destination: "123",
                content: "lorem ipsum",
                time: 1646037846
            },
            {
                id: "1235",
                source: "123",
                destination: "1",
                content: "Hello",
                time: 1646037946
            },
            {
                id: "1234",
                source: "1",
                destination: "123",
                content: "lorem ipsum",
                time: 1646037956
            },
            {
                id: "1235",
                source: "123",
                destination: "1",
                content: "Hello",
                time: 1646038256
            },
            {
                id: "1234",
                source: "1",
                destination: "123",
                content: "lorem ipsum",
                time: 1646037822
            },
            {
                id: "1235",
                source: "123",
                destination: "1",
                content: "Hello",
                time: 1646039003
            },
            {
                id: "1236",
                source: "1",
                destination: "123",
                content: "banj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif vbanj teen gif v",
                time: 1646039003
            }
        ],
        choosing: "",
        offline: false | 3,
    },
    reducers: {
        choose: (state, action) => {
            return {
                ...state,
                choosing: action.payload.id,
                name: action.payload.name,
                avatar: action.payload.avatar,
                offline: action.payload.offline
            }
        },
        sendMessage: (state, action) => {
            return {
                ...state,
                message: [
                    ...state.message,
                    action.payload
                ]
            }
        }

    }
});

export const { choose, sendMessage } = messageSlice.actions;
export default messageSlice.reducer;