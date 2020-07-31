/* eslint-disable indent */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

import { login } from '../redux/actions/auth'

const AuthForm = ({ isLoading, authError, handleLogin }) => {
  const { register, handleSubmit, errors } = useForm()

  return (
    <form
      onSubmit={handleSubmit((data) => {
        if (data.passKey) handleLogin(data.passKey)
      })}
    >
      <h1>Enter pass key:</h1>

      <input name='passKey' type='text' ref={register({ required: true })} />
      <input type='submit' value='Login' />

      {errors.passKey && <p>Pass key is required</p>}
      {authError && <p>Login failed</p>}
      {isLoading && <p>Logging in...</p>}
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.auth.isLoading,
    authError: state.auth.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (apiKey) => dispatch(login(apiKey))
  }
}

AuthForm.propTypes = {
  isLoading: PropTypes.bool,
  authError: PropTypes.any,
  handleLogin: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)
