import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import logo from '../logo.svg'

const NotFound = () => (
  <>
    <Helmet>
      <title> Page not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Error 404</h1>
        <p>Page does not exist</p>
        <Link className="App-link" to="/">
          Go to Home Page
        </Link>
      </header>
    </div>
  </>
)
export default NotFound
