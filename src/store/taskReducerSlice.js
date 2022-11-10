import { createSlice } from '@reduxjs/toolkit';

export const taskReducerSlice = createSlice({
  name: 'store',
  initialState: {
    id: 'id-1',
    name: 'Rosie Simpson',
    number: '459-12-56',
  },
  reducers: {
    setId: (state, data) => {
      state.id = +data.payload;
    },
    setName: (state, data) => {
      state.name = +data.payload;
    },
    setNumber: (state, data) => {
      state.number = +data.payload;
    }
  },
});

export const { setId, setName, setNumber } = taskReducerSlice.actions;

export const phoneContacts = state => state.taskReducer;

export default taskReducerSlice.reducer;
