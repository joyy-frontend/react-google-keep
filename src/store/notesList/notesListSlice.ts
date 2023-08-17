import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../types/note";

interface NoteState {
  mainNote: Note[],
  archiveNotes: Note[],
  trashNotes: Note[],
  editNote: null | Note[],
}

const initialState: NoteState = {
  mainNote: [],
  archiveNotes: [],
  trashNotes: [],
  editNote: null,
}

const noteListSlice = createSlice({
  name: 'noteList',
  initialState,
  reducers: {}
})

export default noteListSlice.reducer;