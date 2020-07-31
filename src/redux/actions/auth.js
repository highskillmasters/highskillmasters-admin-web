import axios from 'redaxios'

export const login = (apiKey) => {
  return (dispatch) => {
    dispatch(loginStarted())
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, { apiKey })
      .then((response) => dispatch(loginSucceed(response.data)))
      .catch((error) => dispatch(loginFailed(error)))
  }
}

const loginStarted = () => ({
  type: 'LOGIN_STARTED'
})

const loginSucceed = (response) => ({
  type: 'LOGIN_SUCCEED',
  payload: { ...response }
})

const loginFailed = (error) => ({
  type: 'LOGIN_FAILED',
  payload: { error }
})
