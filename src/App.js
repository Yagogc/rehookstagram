import React from 'react'
import { Provider } from 'react-redux'
import { Router as ReactRouter, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import store from './store'
import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

const history = createBrowserHistory()

const App = () => (
  <Provider store={store}>
    <ReactRouter history={history}>
      <>
        <Route path="/" component={Main} />
        <Route exact path="/" component={PhotoGrid} />
        <Route exact path="/view/:postId" component={Single} />
      </>
    </ReactRouter>
  </Provider>
)

export default App
