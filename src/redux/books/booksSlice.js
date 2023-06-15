import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'PbxKXK2kbi58QgOTC5KL';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`;

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch books.');
  }
});

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (bookId, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/${bookId}`);
      return bookId;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to delete book');
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBooks',
  async (book, thunkAPI) => {
    try {
      await axios.post(API_URL, book);
      return book;
    } catch (e) {
      return thunkAPI.rejectWithValue({ error: e.message });
    }
  },
);

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  try {
    await axios.delete(`${API_URL}/${bookId}`);
    return bookId;
  } catch (error) {
    throw Error('Failed to remove book.');
  }
});

const initialState = {
  books: [],
  status: 'update',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.status = 'succeeded';
      })
      .addCase(addBook.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.status = 'succeeded';
      });
  },
});

export default booksSlice.reducer;
