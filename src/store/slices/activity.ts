import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  isActive: boolean;
  isShowForm: boolean;
  isModify: boolean;
  action: string;
}

const initialState: ModalState = {
  isActive: false,
  isShowForm: false,
  isModify: false,
  action: "",
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    // 행동 시작
    activeActivity(state, { payload }) {
      state.isActive = true;
      state.action = payload.action;
    },
    // 행동 취소/종료
    inactiveActivity(state) {
      state.isActive = false;
      state.action = "";
    },
    showWorkoutForm(state, { payload }) {
      state.isShowForm = payload.isShowForm;
    },
    isWorkoutFormModify(state, { payload }) {
      state.isModify = payload.isModify;
    },
  },
});

export const activityActions = activitySlice.actions;
export default activitySlice.reducer;
