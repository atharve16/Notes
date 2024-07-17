import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    pinNote: (state, action) => {
      const note = state.find((note) => note.id === action.payload);
      if (note) {
        note.pinned = !note.pinned;
      }
    },
    deleteNote: (state, action) => {
      return state.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      const index = state.findIndex((note) => note.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addNote, pinNote, deleteNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
