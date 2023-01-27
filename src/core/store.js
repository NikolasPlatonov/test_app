import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../pages/usersList/usersSlice'
import postsReducer from '../pages/posts/postsSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
})
