import { createAsyncThunk } from "@reduxjs/toolkit";
import { createNote } from "./api";

export const createNoteAPI = createAsyncThunk(
  "note/createNote",
  async (note, _ThunkAPI) => {
    const response = await createNote(note);
    return response;
  }
);
