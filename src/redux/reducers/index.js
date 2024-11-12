import { combineReducers } from "@reduxjs/toolkit";
import tagReducer from "../operations/tagSlice";
import postsSlice from "../operations/postsSlice";
import generalSlice from "../operations/generalSlice";

const rootReducer = combineReducers({
  tag: tagReducer,
  posts: postsSlice,
  general: generalSlice,
});

export default rootReducer;
