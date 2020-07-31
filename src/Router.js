import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navigation } from './components'
import { Auth, Dashboard } from './pages'

const Router = ({ isAuthenticated }) => {
  return (
    <BrowserRouter>
      <div>
        {isAuthenticated && <Navigation />}

        <Switch>
          {isAuthenticated ? (
            <Route path='/'>
              <Dashboard />
            </Route>
          ) : (
            <Route path='/' exact>
              <Auth />
            </Route>
          )}
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
