import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  showForm: boolean;
}

const initialState: ModalState = {
  showForm: false,
};

const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    openForm(state) {
      state.showForm = true;
    },
    closeForm(state) {
      state.showForm = false;
    },
  },
});

export const workoutActions = workoutSlice.actions;
export default workoutSlice.reducer;
