import { createSlice } from "@reduxjs/toolkit";

const tagReducer = createSlice({
  name: "tag",
  initialState: { tags: [], activeTag: "all" },
  reducers: {
    changeTag: (state, action) => {
      state.activeTag = action.payload.slug;
    },
    fetchTags: (state) => {
      state.error = null;
    },
    fetchTagSuccess: (state, action) => {
      state.tags = [{ name: "All", slug: "all" }, ...action.payload];
    },
  },
});

export const { changeTag, fetchTags, fetchTagSuccess } = tagReducer.actions;

export default tagReducer.reducer;
