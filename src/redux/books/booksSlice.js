import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4QOoKXyoyH79LaQpn50M/books/';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios(API_URL);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch books.');
  }
});

// export const addBook = createAsyncThunk('books/addBook', async (book) => {
//   const response = await axios.post(API_URL, book);
//   return response.data;
// });

export const addBook = createAsyncThunk(
  'books/addBook',
  async (_, thunkAPI) => {
    try {
      const response = await axios(API_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'An error has occurred while getting data',
      );
    }
  },
);

// export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
//   await axios.delete(`${API_URL}${bookId}`);
//   return bookId;
// });

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId, thunkAPI) => {
    try {
      const response = await axios(`${API_URL}${bookId}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (response.status === 201) {
        thunkAPI.dispatch(fetchBooks());
        return null;
      }
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to delete book');
    }
  },
);

// const initialState = {
//   data: [
//     {
//       item_id: 'item1',
//       title: 'The Great Gatsby',
//       author: 'John Smith',
//     },
//     {
//       item_id: 'item2',
//       title: 'Anna Karenina',
//       author: 'Leo Tolstoy',
//     },
//   ],
//   status: 'idle',
//   error: null,
// };

const initialState = {
  data: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
    },
  ],
  status: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // .addCase(addBook.fulfilled, (state, action) => {
      //   state.data.push(action.payload);
      // })
      // .addCase(removeBook.fulfilled, (state, action) => {
      //   state.data = state.data.filter((book) => book.item_id !== action.payload);
      // });

      .addCase(addBook.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload];
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (book) => book.item_id !== action.payload,
        );
      });
  },
});

export default booksSlice.reducer;
