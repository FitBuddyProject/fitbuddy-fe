/**
 * @description buddy 행동 관련 slice
 */

import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface BuddyState {
  isLoading: boolean;
  data: any;
  error: AxiosError | null;
}

const initialState: BuddyState = {
  isLoading: false,
  data: null,
  error: null,
};

const ActionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {
    getHistories: (state) => {
      state.isLoading = true;
    },
    getHistoriesSuccess: (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    },
    getHistoriesFailed: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    getCalendar: (state) => {
      state.isLoading = true;
    },
    getCalendarSuccess: (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    },
    getCalendarFailed: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    startAction: (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    },
    startActionSuccess: (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    },
    startActionFailed: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const actionActions = ActionSlice.actions;
export default ActionSlice.reducer;
