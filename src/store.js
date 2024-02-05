// store.js
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './store/postslice'

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
