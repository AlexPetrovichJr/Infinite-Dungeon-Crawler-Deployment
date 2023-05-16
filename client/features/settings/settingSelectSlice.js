import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  settings: [],
  status: 'idle',
};

export const fetchSettings = createAsyncThunk(
  'settingSelect/fetchSettings',
  async () => {
    let { data } = await axios.get('/api/settings');
    return data;
  }
);

export const settingSelectSlice = createSlice({
  name: 'settingSelect',
  initialState,
  reducers: {
    setSettings: (state, action) => {
      state.settings = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchSettings.pending, state => {
        console.log('Promise Pending');
        state.status = 'loading';
      })
      .addCase(fetchSettings.fulfilled, (state, action) => {
        console.log('Promise Fulfilled:', action);

        state.settings = action.payload; // set the settings to the value from my fetch
        state.status = 'idle';
      });
  },
});

export const { setSettings } = settingSelectSlice.actions;

export default settingSelectSlice.reducer;
