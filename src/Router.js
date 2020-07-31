import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navigation } from './components'
import { Auth, Dashboard } from './pages'

const Router = ({ isAuthenticated }) => {
  console.log(isAuthenticated)

  return (
    <BrowserRouter>
      <div>
        <Navigation />

        <Switch>
          <Route path='/' exact>
            <Auth />
          </Route>
          <Route path='/'>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

Router.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Router)
