import React from 'react'
import { createRoot } from 'react-dom/client'
import { store } from '../src/core/store'
import { Provider } from 'react-redux'
import { UsersList } from '../src/pages/usersList/usersList'
import { Posts } from '../src/pages/posts/posts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/test_app" element={<UsersList />} />
        <Route exact path="/posts/:id" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
