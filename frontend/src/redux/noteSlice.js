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
  viewNote: {},
  status: {
    hasLoaded: false,
    isView: false,
    message: 'No notes available'
  }
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    view(state, action) {
      const id = action.payload;
      const note = state.allNotes.find(note =>note.id === id);
      note ? state.viewNote = note : state.viewNote = {};
      state.status.isView = true;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAllNoteAPI.pending, state => {
      state.status.hasLoaded = false;
      state.status.message = 'Loading notes...';
    })
    .addCase(fetchAllNoteAPI.fulfilled, (state, action) => {
      const notes = action.payload;
      if (notes.length !== 0) {
        state.allNotes = notes;
        state.status.hasLoaded = true;
      }
    })
    .addCase(fetchAllNoteAPI.rejected, state => {
      state.status.hasLoaded = false;
      state.status.message = 'Loading failed!';
    })
  },
});

export const allNotesState = state => state.note.allNotes;
export const noteStatus = state => state.note.status;
export const viewNote = state => state.note.viewNote;
export const { view } = noteSlice.actions;
export default noteSlice.reducer;