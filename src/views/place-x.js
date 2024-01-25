import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './place-x.css'

const PlaceX = (props) => {
  return (
    <div className="place-x-container">
      <Helmet>
        <title>Place-X - Fragrant Jealous Pelican</title>
        <meta
          property="og:title"
          content="Place-X - Fragrant Jealous Pelican"
        />
      </Helmet>
      <div className="place-x-container1">
        <Link to="/" className="place-x-navlink">
          <span>&lt; Go Back</span>
          <br></br>
        </Link>
      </div>
      <div className="place-x-container2">
        <div className="place-x-container3">
          <img
            alt="image"
            src="/noun-merry-go-round-4082252-200h.png"
            className="place-x-image"
          />
          <h1 className="place-x-text2">Text</h1>
          <h1>Text</h1>
        </div>
      </div>
    </div>
  )
}

export default PlaceX
