import React from 'react'
import { createRoot } from 'react-dom/client'

import { store } from '../src/core/store'
import { Provider } from 'react-redux'
import { UsersView } from './features/users/UsersView'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <Provider store={store}>
    <UsersView />
  </Provider>
)
