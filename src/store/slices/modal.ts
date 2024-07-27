import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  show: boolean;
}

const initialState: ModalState = {
  show: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal(state) {
      state.show = true;
    },
    closeModal(state) {
      state.show = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
