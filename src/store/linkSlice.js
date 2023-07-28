import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_SHORTEN_URL } from '../helpers/API';

export const createShortLink = createAsyncThunk(
  'linkCards/createShortLink',
  async function (url) {
    const response = await fetch(API_SHORTEN_URL + url, { method: 'POST' });
    return await response.json();
  }
);

const linkSlice = createSlice({
  name: 'linkCards',
  initialState: {
    linkCards: [],
    loading: 'idle',
    error: '',
  },
  reducers: {
    setError(state, action) {
      state.error = action.payload.error;
    },
  },
  extraReducers: {
    [createShortLink.rejected]: (state) => {
      state.loading = 'rejected';
    },
    [createShortLink.pending]: (state) => {
      state.loading = 'loading';
    },
    [createShortLink.fulfilled]: (state, action) => {
      const { ok, result, error } = action.payload;

      if (ok) {
        state.linkCards.push({
          oldLink: result.original_link,
          newLink: result.full_short_link,
          id: Date.now(),
        });
        state.loading = 'idle';
      } else {
        state.loading = 'error';
        state.error = error;
      }
    },
  },
});

export const { setError } = linkSlice.actions;

export default linkSlice.reducer;
