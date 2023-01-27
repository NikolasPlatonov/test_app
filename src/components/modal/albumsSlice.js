import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  albums: [],
  isLoading: true,
  error: '',
}

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/albums')
    .then((response) => {
      return response.data
    })
})

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.isLoading = false
      state.albums = action.payload
      state.error = ''
    })
    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.isLoading = false
      state.albums = []
      state.error = action.error.message
    })
  },
})

export default albumsSlice.reducer
