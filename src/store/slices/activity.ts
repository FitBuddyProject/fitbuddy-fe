import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  isActive: boolean;
  isShowForm: boolean;
  isModify: boolean;
}

const initialState: ModalState = {
  isActive: false,
  isShowForm: false,
  isModify: false,
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    activeActivity(state, { payload }) {
      state.isActive = payload.isActive;
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
