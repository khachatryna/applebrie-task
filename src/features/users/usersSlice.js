import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  status: 'idle',
};


export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },


});


export default usersSlice.reducer;
