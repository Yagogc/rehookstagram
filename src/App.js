import React from 'react'
import { Router as ReactRouter, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'
import Providers from './Providers'

const history = createBrowserHistory()

const App = () => (
  <Providers>
    <ReactRouter history={history}>
      <>
        <Route path="/" component={Main} />
        <Route exact path="/" component={PhotoGrid} />
        <Route exact path="/view/:postId" component={Single} />
      </>
    </ReactRouter>
  </Providers>
)

export default App
