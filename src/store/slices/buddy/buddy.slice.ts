/**
 * @description buddy 관련 slice
 */

import { createSlice } from "@reduxjs/toolkit";
import { BuddyDTO } from "types/buddy.types";

interface BuddyState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: BuddyDTO[] | null;
  buddy: any | null;
}

const initialState: BuddyState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: null,
  buddy: null,
};

const buddySlice = createSlice({
  name: "buddy",
  initialState,
  reducers: {
    getBuddies: (state) => {
      state.isLoading = true;
    },
    getBuddiesSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
      state.buddy = payload[0];
    },
    getBuddiesError: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const buddyActions = buddySlice.actions;
export default buddySlice.reducer;
