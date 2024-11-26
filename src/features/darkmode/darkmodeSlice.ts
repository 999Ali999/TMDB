import { createSlice } from "@reduxjs/toolkit";

export interface darkmodeState {
  darkmode: boolean;
}

const initialState: darkmodeState = {
  darkmode: false,
};

export const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    toggleDarkmode: (state) => {
      state.darkmode = !state.darkmode;
    },
  },
});

export const { toggleDarkmode } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;
