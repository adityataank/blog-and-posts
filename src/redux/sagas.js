import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  fetchFilteredPosts,
  fetchFilteredPostsSuccess,
  fetchPostDetail,
  fetchPostDetailSuccess,
  fetchPosts,
  fetchPostsSuccess,
  fetchSearchedPosts,
  fetchSearchedPostsSuccess,
} from "./operations/postsSlice";
import { changeTag, fetchTags, fetchTagSuccess } from "./operations/tagSlice";

function* fetchPostSaga() {
  try {
    const response = yield call(axios.get, "https://dummyjson.com/posts");
    yield put(fetchPostsSuccess(response?.data));
  } catch (error) {
    console.log(error);
  }
}

function* fetchTagSaga() {
  try {
    const response = yield call(axios.get, "https://dummyjson.com/posts/tags");
    yield put(fetchTagSuccess(response?.data));
  } catch (error) {
    console.log(error);
  }
}

function* fetchPostsByTag(action) {
  try {
    const { slug } = action?.payload ?? {};

    let url = `https://dummyjson.com/posts/tag/${slug}`;

    if (slug === "all" || !slug) {
      url = "https://dummyjson.com/posts";
    }

    const response = yield call(axios.get, url);
    yield put(fetchPostsSuccess(response?.data));
  } catch (error) {
    console.log(error);
  }
}

function* fetchPostDetailSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(axios.get, `https://dummyjson.com/posts/${id}`);
    yield put(fetchPostDetailSuccess(response?.data));
  } catch (error) {
    console.log(error);
  }
}

function* fetchFilteredPostSaga(action) {
  try {
    const type = action.payload;
    const response = yield call(
      axios.get,
      `https://dummyjson.com/posts?sortBy=${type}&order=asc`
    );
    yield put(fetchFilteredPostsSuccess(response?.data));
  } catch (error) {
    console.log(error);
  }
}

function* fetchSearchedPostSaga(action) {
  try {
    const q = action.payload;
    const response = yield call(
      axios.get,
      `https://dummyjson.com/posts/search?q=${q}`
    );
    yield put(fetchSearchedPostsSuccess(response?.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield takeEvery(fetchPosts.type, fetchPostSaga);
  yield takeEvery(fetchTags.type, fetchTagSaga);
  yield takeEvery(changeTag.type, fetchPostsByTag);
  yield takeEvery(fetchPostDetail.type, fetchPostDetailSaga);
  yield takeEvery(fetchFilteredPosts.type, fetchFilteredPostSaga);
  yield takeEvery(fetchSearchedPosts.type, fetchSearchedPostSaga);
}
