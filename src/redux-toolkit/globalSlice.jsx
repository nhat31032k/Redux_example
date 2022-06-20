import { createSlice } from "@reduxjs/toolkit";
const globalSlice = createSlice({
  name: "global",
  initialState: {
    darkMode: false,
    showSideBar: true,
  },
  reducers: {
    toggleDarkMode: (state, { payload }) => ({
      ...state,
      darkMode: payload,
    }),
    toggleSideBar: (state, { payload }) => ({
      ...state,
      showSideBar: payload,
    }),
  },
});
export const { toggleDarkMode, toggleSideBar } = globalSlice.actions;
export default globalSlice.reducer;
