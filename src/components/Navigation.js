import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Navigation = ({ handleLogout }) => {
  return (
    <nav>
      <a
        href='/'
        onClick={(event) => {
          event.preventDefault()
          handleLogout()
        }}
      >
        Logout
      </a>
    </nav>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: () => dispatch({ type: 'LOGOUT' })
  }
}

Navigation.propTypes = {
  handleLogout: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Navigation)
