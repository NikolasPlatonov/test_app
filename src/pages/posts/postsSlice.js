import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  posts: [],
  isLoading: true,
  error: '',
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      console.log('response', response)
      return response.data
    })
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false
      state.posts = action.payload
      state.error = ''
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false
      state.posts = []
      state.error = action.error.message
    })
  },
})

export default postsSlice.reducer
