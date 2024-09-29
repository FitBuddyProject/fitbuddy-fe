/**
 * @description buddy 관련 slice
 */

import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { BuddyDTO } from "types/buddy.types";

interface BuddyState {
  loading: boolean;
  data: BuddyDTO[] | null;
  // erorr: AxiosError | null;
  buddy: any | null;
}

const initialState: BuddyState = {
  loading: false,
  data: null,
  // error: null,
  buddy: null,
};

const buddySlice = createSlice({
  name: "buddy",
  initialState,
  reducers: {
    getBuddies: (state) => {
      // loading => true
      state.loading = true;
    },
    getBuddiesSuccess: (state, { payload }) => {
      // API 요청이 성공적이면 데이터를 payload에 들어온다.
      state.data = payload;
      state.loading = false;
    },
    getBuddiesError: (state, { payload }) => {
      // state.error = payload;
      state.loading = false;
    },
  },
});

export const buddyActions = buddySlice.actions;
export default buddySlice.reducer;
