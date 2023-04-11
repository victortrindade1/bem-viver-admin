import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState = {
  filter: "",
  sorting: [{ id: "", desc: false }],
  pagination: {
    pageIndex: 0,
    pageSize: 15,
  },
  columnFilters: [],
  columnVisibility: {},
  columnSizing: {},
  density: "comfortable",
};

const professoresTableSlice = createSlice({
  name: "professoresTableConfig",
  initialState,
  reducers: {
    store: (state, action) => {
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

export const { store } = professoresTableSlice.actions;

export const selectProfessoresTable = (state: RootState) =>
  state.professoresTable;

export default professoresTableSlice.reducer;
