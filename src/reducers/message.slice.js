import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: "message-slice",
    initialState: {
        name: "",
        avatar: "",
        message: [],
    },
    reducers: {

    }
});