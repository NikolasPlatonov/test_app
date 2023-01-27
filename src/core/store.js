import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../pages/usersList/usersSlice'
import postsReducer from '../pages/posts/postsSlice'
import albumsReducer from '../components/modal/albumsSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    albums: albumsReducer,
  },
})
