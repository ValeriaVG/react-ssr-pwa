import React from 'react'
import { Switch, Route } from 'react-router'
import './App.css'
import Home from './pages/home'
import NotFound from './pages/404'

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="**" component={NotFound} />
    </Switch>
  )
}

export default App
