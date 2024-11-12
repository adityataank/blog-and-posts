import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: { posts: [], loading: false, postDetail: {} },
  reducers: {
    fetchPosts: (state) => {
      state.loading = true;
    },
    fetchPostDetail: (state) => {
      state.postDetail = {};
      state.loading = true;
    },
    fetchFilteredPosts: (state) => {
      state.loading = true;
    },
    fetchSearchedPosts: (state) => {
      state.loading = true;
    },
    fetchPostsSuccess: (state, action) => {
      state.posts = action.payload.posts;
      state.loading = false;
    },
    fetchPostDetailSuccess: (state, action) => {
      state.postDetail = action.payload;
      state.loading = false;
    },
    fetchFilteredPostsSuccess: (state, action) => {
      state.posts = action.payload.posts;
      state.loading = false;
    },
    fetchSearchedPostsSuccess: (state, action) => {
      state.posts = action.payload.posts;
      state.loading = false;
    },
  },
});

export const {
  fetchPosts,
  fetchPostsSuccess,
  fetchPostDetail,
  fetchPostDetailSuccess,
  fetchFilteredPosts,
  fetchFilteredPostsSuccess,
  fetchSearchedPosts,
  fetchSearchedPostsSuccess,
} = postsSlice.actions;

export default postsSlice.reducer;
