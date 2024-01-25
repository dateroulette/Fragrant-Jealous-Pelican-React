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
      <Link to="/place-x" className="home-navlink button">
        Button
      </Link>
    </div>
  )
}

export default Home
