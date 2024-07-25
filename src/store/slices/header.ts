import { createSlice } from "@reduxjs/toolkit";

export interface HeaderState {
  title: string;
}

const initialState: HeaderState = {
  title: "",
};

const headerSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    setTitle(state, { payload }) {
      state.title = payload;
    },
  },
});

export const headerActions = headerSlice.actions;
export default headerSlice.reducer;
