import { applyMiddleware, compose } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import rootSagas from './sagas'

export default function createStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers =
    process.env.NODE_ENV === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose

  const store = configureStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware, thunk))
  )

  sagaMiddleware.run(rootSagas)

  return store
}
