import React from 'react'
import { RichText } from 'prismic-reactjs'
import { headerStyles } from 'styles'

/**
 * Homepage header component
 */
const Header = ({ image, headline, description }) => {
  return (
    <div className="home">
      <div className="blog-avatar" style={{ backgroundImage: `url(${image.url})` }} />
      <div className="blog-logo-container">
        <h2 className="blog-logo">ALAN<span>SIQUEIRA</span></h2>
        <span className="blog-bash">$ users/alansiq</span>
      </div>
      <h1 className="blog-title">{RichText.asText(headline)}</h1>
      {/* <p className="blog-description">{RichText.asText(description)}</p> */}
      <style jsx global>{headerStyles}</style>
    </div>
  )
}

export default Header
