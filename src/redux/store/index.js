import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { loadState, saveState } from './sessionStorage'
import auth from '../reducers/auth'

const rootReducer = combineReducers({ auth })
const persistedState = loadState()

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
)

saveState(store.getState())
store.subscribe(() => {
  saveState(store.getState())
})

export default store
