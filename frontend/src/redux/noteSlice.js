import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllNotes } from "./actions";

export const fetchAllNoteAPI = createAsyncThunk(
  'note/fetchAllNote',
  async(_ThunkAPI) => {
    const response = await getAllNotes();
    return response;
  }
)

const initialState = {
  allNotes: [],
  status: {
    hasLoaded: false,
    message: 'No notes available'
  }
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllNoteAPI.fulfilled, (state, action) => {
      const notes = action.payload;
      if (notes.length !== 0) {
        state.allNotes = notes;
        state.status.hasLoaded = true;
      }
    });
  },
});

export const allNotesState = state => state.note.allNotes;
export const noteStatusState = state => state.note.status;
export default noteSlice.reducer;