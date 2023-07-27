import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_SHORTEN_URL } from '../helpers/API';

export const createShortLink = createAsyncThunk(
  'links/createShortLink',
  async function (url) {
    const response = await fetch(API_SHORTEN_URL + url, { method: 'POST' });
    return await response.json();
  }
);

const linkSlice = createSlice({
  name: 'links',
  initialState: {
    linkCards: [],
    loading: 'idle',
  },
  // reducers: {
  //   createLink(state, action) {
  //     state.linkCards.push(action.payload.links);
  //   },
  // },
  extraReducers: {
    [createShortLink.rejected]: (state) => {
      state.loading = 'rejected';
    },
    [createShortLink.pending]: (state) => {
      state.loading = 'loading';
    },
    [createShortLink.fulfilled]: (state, action) => {
      const { ok, result } = action.payload;

      if (ok) {
        state.linkCards.push({
          oldLink: result.original_link,
          newLink: result.full_short_link,
          id: Date.now(),
        });
        state.loading = 'idle';
      } else {
        state.loading = 'error';
      }
    },
  },
});

// export const { createLink } = linkSlice.actions;

export default linkSlice.reducer;
