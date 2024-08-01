import { createSlice } from "@reduxjs/toolkit";

export interface HistoryListProps {
  id: number;
  type: string;
  date: string;
  mp?: number;
  hp?: number;
}

export interface HistoryState {
  historyList: HistoryListProps[];
}

const initialState: HistoryState = {
  historyList: [
    {
      id: 1,
      type: "workout",
      date: "7월 6일 13:11",
      mp: 10,
      hp: -10,
    },
    {
      id: 2,
      type: "workout",
      date: "7월 6일 13:11",
      hp: -10,
    },
  ],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistoryList(state, { payload }) {
      state.historyList = [...state.historyList, payload];
    },
  },
});

export const historyActions = historySlice.actions;
export default historySlice.reducer;
