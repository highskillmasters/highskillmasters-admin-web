const initialState = {
  isAuthenticated: false,
  isLoading: false,
  response: null,
  error: null
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
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        response: action.payload.response,
        error: null
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
        isAuthenticated: false
      }
    default:
      return state
  }
}

export default auth
