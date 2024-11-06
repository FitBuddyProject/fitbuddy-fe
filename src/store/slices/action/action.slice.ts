/**
 * @description buddy 행동 관련 slice
 */

import { createSlice } from "@reduxjs/toolkit";

interface BuddyState {
  isActive: boolean;
  isShowForm: boolean;
  isModify: boolean;
  action: string; // 진행 중인 행동
  actionUuid: string;
}

const initialState: BuddyState = {
  isActive: false,
  isShowForm: false,
  isModify: false,
  action: "",
  actionUuid: "",
};

const ActionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {
    // 행동 시작
    activeActivity(state, { payload }) {
      state.isActive = true;
      state.action = payload.action;
      state.actionUuid = payload.actionUuid;
    },
    // 행동 취소/종료
    inactiveActivity(state) {
      state.isActive = false;
      state.action = "";
      state.actionUuid = "";
    },
    showWorkoutForm(state, { payload }) {
      state.isShowForm = payload.isShowForm;
    },
    isWorkoutFormModify(state, { payload }) {
      state.isModify = payload.isModify;
    },
  },
});

export const actionActions = ActionSlice.actions;
export default ActionSlice.reducer;
