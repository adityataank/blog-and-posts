import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
  name: "general",
  initialState: { showFilters: false },
  reducers: {
    toggleShowFilters: (state) => {
      state.showFilters = !state.showFilters;
    },
  },
});

export const { toggleShowFilters } = generalSlice.actions;

export default generalSlice.reducer;
