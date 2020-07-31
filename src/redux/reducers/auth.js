const initialState = {
  isAuthenticated: false,
  isLoading: false,
  error: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_STARTED':
      return {
        ...state,
        isLoading: true
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        isAuthenticated: true
      }
    case 'LOGIN_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    case 'LOGOUT_USER':
      return {
        ...state,
        isAuthenticated: false
      }
    default:
      return state
  }
}

export default auth
