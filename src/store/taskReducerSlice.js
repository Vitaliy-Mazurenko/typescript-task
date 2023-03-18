import { createSlice } from '@reduxjs/toolkit';

export const taskReducerSlice = createSlice({
  name: 'store',
  initialState: {
    rows: 0,
    columns: 0,
    near: 0,
    cells: [],
  },
  reducers: {
    setRows: (state, data) => {
      state.rows = +data.payload;
    },
    setColumns: (state, data) => {
      state.columns = +data.payload;
    },
    setNear: (state, data) => {
      state.near = +data.payload;
    },
    setCells: (state, data) => {
      state.cells = data.payload;
    },
  },
});

export const { setRows, setColumns, setNear, setCells } = taskReducerSlice.actions;

export const selectRows = state => state.taskReducer.rows;
export const selectColumns = state => state.taskReducer.columns;
export const selectNear = state => state.taskReducer.near;
export const selectCells = state => state.taskReducer.cells;

export default taskReducerSlice.reducer;
