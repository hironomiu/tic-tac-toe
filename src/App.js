import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Main from './components/Main'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/" />
            <Main />
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
