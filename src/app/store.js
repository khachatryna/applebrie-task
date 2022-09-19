import { configureStore } from '@reduxjs/toolkit';
import {postAPI} from "../features/posts/postsAPI";
import {usersAPI} from "../features/users/usersAPI";

export const store = configureStore({
  reducer: {
    [postAPI.reducerPath]: postAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(usersAPI.middleware).concat(postAPI.middleware),
});
