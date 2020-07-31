import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { login } from '../redux/actions/auth'

const AuthForm = ({ isAuthenticated, isLoading, error, handleLogin }) => {
  console.info({ isAuthenticated, isLoading, error })

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        handleLogin()
      }}
    >
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

AuthForm.propTypes = {
  isAuthenticated: PropTypes.bool,
  isLoading: PropTypes.bool,
  error: PropTypes.any,
  handleLogin: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)
