import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllNotes, createNote } from "./api";

export const fetchAllNoteAPI = createAsyncThunk(
  'note/fetchAllNote',
  async(_ThunkAPI) => {
    const response = await getAllNotes();
    return response;
  }
);

export const createNoteAPI = createAsyncThunk(
  "note/createNote",
  async (note, _ThunkAPI) => {
    const response = await createNote(note);
    return response;
  }
);
