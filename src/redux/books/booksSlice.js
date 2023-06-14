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

export const addBook = createAsyncThunk('books/addBook', async (book, { rejectWithValue }) => {
  try {
    const response = await axios.post(API_URL, book);
    return response.data;
  } catch (error) {
    return rejectWithValue('Failed to add book');
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  try {
    await axios.delete(`${API_URL}/${bookId}`);
    return bookId;
  } catch (error) {
    throw Error('Failed to remove book.');
  }
});

const initialState = {
  books: [], // Ensure that `books` is initialized as an empty array
  status: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const bookId = action.payload;
        delete state.books[bookId];
      })
      .addCase(deleteBook.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export default booksSlice.reducer;
