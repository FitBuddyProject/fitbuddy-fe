/**
 * @description buddy 행동 관련 slice
 */

import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface BuddyState {
  isLoading: boolean;
  data: any;
  error: AxiosError | null;
  actionUuid: string;
  historyList: any;
}

const initialState: BuddyState = {
  isLoading: false,
  data: null,
  error: null,
  actionUuid: "",
  historyList: [],
};

const ActionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {
    setActionUuid: (state, { payload }) => {
      state.actionUuid = payload;
    },
  },
});

export const actionActions = ActionSlice.actions;
export default ActionSlice.reducer;
