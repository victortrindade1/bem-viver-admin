import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState = {
  filter: "",
  sorting: [{ id: "", desc: false }],
  pagination: {
    pageIndex: 0,
    pageSize: 15,
  },
  columnFilters: [
    {
      id: "",
      value: "",
    },
  ],
  columnVisibility: {},
  columnSizing: {},
  density: "comfortable",
};

const alunosTableSlice = createSlice({
  name: "alunosTableSlice",
  initialState,
  reducers: {
    store: (state, action) => {
      console.log("action", action);
      state.filter = action.payload.filter;
      state.pagination = action.payload.pagination;
      state.sorting = action.payload.sorting;
      state.columnFilters = action.payload.columnFilters;
      state.columnVisibility = action.payload.columnVisibility;
      state.columnSizing = action.payload.columnSizing;
      state.density = action.payload.density;
    },
  },
});

export const { store } = alunosTableSlice.actions;

export const selectAlunosTable = (state: RootState) => state.alunosTable;

export default alunosTableSlice.reducer;
