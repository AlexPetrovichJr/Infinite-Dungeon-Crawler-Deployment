import { createSlice } from "@reduxjs/toolkit";

const messageHistorySlice = createSlice({
  name: "messageHistory",
  initialState: [],
  reducers: {
    updateMessageHistory: (state, action) => {
      state.push(action.payload);
    },
    clearMessageHistory: (state, action) => {
      return [];
    },
  },
});

export const { updateMessageHistory, clearMessageHistory } =
  messageHistorySlice.actions;
export default messageHistorySlice.reducer;
