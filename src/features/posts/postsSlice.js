import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  status: 'idle',
};


export const postsSlice = createSlice({
  name: 'userPosts',
  initialState,
  reducers: {
  },


});


export default postsSlice.reducer;
