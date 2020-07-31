import axios from 'axios'

export const login = (apiKey) => {
  return (dispatch) => {
    dispatch(loginStarted())

    const url = `${process.env.REACT_APP_API_URL}/auth/login`

    axios
      .post(url, { apiKey })
      .then((res) => dispatch(loginSuccess(res.data)))
      .catch((err) => dispatch(loginFailed(err.message)))
  }
}

const loginStarted = () => ({
  type: 'LOGIN_STARTED'
})

const loginSuccess = (todo) => ({
  type: 'LOGIN_SUCCESS',
  payload: {
    ...todo
  }
})

const loginFailed = (error) => ({
  type: 'LOGIN_FAILED',
  payload: {
    error
  }
})
