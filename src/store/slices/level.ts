/**
 * @description level 관련 slice
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * 경첨치 게이지바
 * Lv0: 30
 * Lv1 : 200
 * Lv2 : 300
 * Lv3 : 500
 */

interface BuddyState {
  level: number;
  currentEXP: number;
  requiredEXP: number; // 레벨 업 할때 필요한 EXP
}

const initialState: BuddyState = {
  level: 0,
  currentEXP: 0,
  requiredEXP: 30,
};

const levelSlice = createSlice({
  name: "level",
  initialState,
  reducers: {
    setEXP: (state, action: PayloadAction<{ exp: number }>) => {
      state.currentEXP = action.payload.exp;
      if (state.currentEXP < 200) {
        state.level = 1;
        state.requiredEXP = 200;
      } else if (state.currentEXP < 300) {
        state.level = 2;
        state.requiredEXP = 300;
      } else if (state.currentEXP < 500) {
        state.level = 3;
        state.requiredEXP = 500;
      }
    },
    gainXP: (state, action: PayloadAction<{ exp: number }>) => {
      state.currentEXP += action.payload.exp;
      if (state.currentEXP >= state.requiredEXP) {
        const newLevel = state.level + 1;
        state.currentEXP -= state.requiredEXP;
        state.level = newLevel;
        if (newLevel === 1) state.requiredEXP = 200;
        if (newLevel === 2) state.requiredEXP = 300;
        if (newLevel === 3) state.requiredEXP = 500;
      }
    },
    resetXP: (state) => {
      state.level = 0;
      state.currentEXP = 0;
      state.requiredEXP = 30;
    },
  },
});

export const levelActions = levelSlice.actions;
export default levelSlice.reducer;
