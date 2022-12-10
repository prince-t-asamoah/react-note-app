import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allNotes: []
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {}
});

export default noteSlice.reducer;