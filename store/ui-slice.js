import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isTaskFormOpen: false },
  reducers: {
    toggleTaskForm(state) {
      state.isTaskFormOpen = !state.isTaskFormOpen;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
