import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Notification {
  id: number;
  content: string;
  subContent: string;
  btnText: string;
}

export interface ModalState {
  showModal: boolean;
  notifications: Notification[];
}

const initialState: ModalState = {
  showModal: false,
  notifications: [],
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.showModal = true;
    },
    closeModal(state) {
      state.showModal = false;
    },
    pushNotificationModal(state, { payload }) {
      const id = uuidv4();
      payload.id = id;
      state.notifications = [payload, ...state.notifications];
    },
    removeNotificationModal(state, { payload }) {
      state.notifications = state.notifications.filter((item) => item.id !== payload.id);
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
