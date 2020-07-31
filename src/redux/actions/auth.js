import axios from 'redaxios'

export const login = (apiKey) => {
  return (dispatch) => {
    dispatch(loginStarted())

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, { apiKey })
      .then((response) => dispatch(loginSuccess(response.data)))
      .catch((error) => dispatch(loginFailed(error)))
  }
}

const loginStarted = () => ({
  type: 'LOGIN_STARTED'
})

const loginSuccess = (response) => ({
  type: 'LOGIN_SUCCESS',
  payload: {
    ...response
  }
})

const loginFailed = (error) => {
  return {
    type: 'LOGIN_FAILED',
    payload: {
      error
    }
  }
}
