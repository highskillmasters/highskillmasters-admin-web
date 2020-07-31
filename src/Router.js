import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navigation } from './components'
import { Auth, Dashboard } from './pages'

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />

        <Switch>
          <Route path='/' exact>
            <Auth />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Router
