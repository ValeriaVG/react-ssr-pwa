import React from 'react'
import { Helmet } from 'react-helmet'
import logo from '../logo.svg'

const Home = () => (
  <>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="Awesome Home Page" />
    </Helmet>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Home Page</h1>
        <p>Home Page Content</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </>
)
export default Home
