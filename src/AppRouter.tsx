import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Landing, NotFound, Post } from '@pages'

const AppRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/landing" />} />

      <Route exact path="/landing" render={() => <Landing />} />

      <Route exact path="/post" render={() => <Post />} />

      <Route path="*" render={() => <NotFound />} />
    </Switch>
  </Router>
)

export default AppRouter
