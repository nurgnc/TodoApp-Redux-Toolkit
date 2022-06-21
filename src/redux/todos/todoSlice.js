import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "Learn React",
      },
      {
        id: "2",
        title: "Read a book",
      },
    ],
  },
  reducers: {},
});

export default todoSlice.reducer;
