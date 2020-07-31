import React from 'react'
import connect from 'react-redux'

import { login } from '../redux/actions/auth'

const AuthForm = () => {
  return (
    <form>
      <h1>Enter pass key:</h1>
      <input type='text' />
      <input type='submit' value='Login' />
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
    error: state.auth.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (apiKey) => dispatch(login(apiKey))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)
