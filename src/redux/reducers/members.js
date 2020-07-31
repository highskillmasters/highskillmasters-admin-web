const initialState = {
  isLoading: false,
  data: null,
  error: null
}

const members = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_MEMBERS_STARTED':
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case 'GET_ALL_MEMBERS_SUCCEED':
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload.data
      }
    case 'GET_ALL_MEMBERS_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default members
