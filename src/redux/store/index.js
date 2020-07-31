import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { loadState, saveState } from './sessionStorage'

import auth from '../reducers/auth'
import members from '../reducers/members'

const rootReducer = combineReducers({
  auth,
  members
})

const store = createStore(
  rootReducer,
  loadState(),
  composeWithDevTools(applyMiddleware(thunk))
)

saveState(store.getState())

store.subscribe(() => {
  saveState(store.getState())
})

export default store
