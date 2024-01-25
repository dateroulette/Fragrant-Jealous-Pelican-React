import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Fragrant Jealous Pelican</title>
        <meta property="og:title" content="Fragrant Jealous Pelican" />
      </Helmet>
      <div className="home-container1">
        <Link to="/place-x" className="home-navlink button">
          Button
        </Link>
      </div>
    </div>
  )
}

export default Home
