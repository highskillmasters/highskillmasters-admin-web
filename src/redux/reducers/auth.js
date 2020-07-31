const initialState = {
  isAuthenticated: false,
  isLoading: false,
  error: null,
  apiKey: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_STARTED':
      return {
        ...state,
        isAuthenticated: false,
        isLoading: true,
        error: null
      }
    case 'LOGIN_SUCCEED':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        error: null,
        apiKey: action.payload.apiKey
      }
    case 'LOGIN_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        error: null,
        apiKey: null
      }
    default:
      return state
  }
}

export default auth
