import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const NotFound = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Error 404 - Page does not exist</p>
      <Link className="App-link" to="/">
        Go to Home Page
      </Link>
    </header>
  </div>
)
export default NotFound
