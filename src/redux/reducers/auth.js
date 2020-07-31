const defaultState = {
  isAuthenticated: false
}

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      return {
        isAuthenticated: true
      }
    case 'DEAUTHENTICATE_USER':
      return {
        isAuthenticated: false
      }
    default:
      return state
  }
}

export default auth
