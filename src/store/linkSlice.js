import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createShortLink = createAsyncThunk(
  'links/createShortLink',
  async function (url) {
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${url}`,
      { method: 'POST' }
    );
    return await response.json();
  }
);

const linkSlice = createSlice({
  name: 'links',
  initialState: {
    links: [],
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
        state.links.push(result.full_short_link2);
        state.loading = 'idle';
      } else {
        state.loading = 'error';
      }
    },
  },
});

// export const { createLink } = linkSlice.actions;

export default linkSlice.reducer;
