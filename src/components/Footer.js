import React, { Component } from 'react'
import netlify from '../../content/images/netlify.png'
import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/images/github.svg'
import { Link } from 'gatsby'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          <a href="https://ko-fi.com/hesperis" target="_blank" rel="noopener noreferrer">
            Ko-Fi
          </a>

          {/* <Link to="/contact">Newsletter</Link> */}
          <a href="https://hesperis.netlify.com/rss.xml" target="_blank" rel="noopener noreferrer">
            RSS
          </a>
        </div>
        <div>
          <a href="https://github.com/ndessenius" title="Open-source on GitHub">
            <img src={github} target="_blank" rel="noopener noreferrer" className="footer-img" />
          </a>
          <a href="https://www.netlify.com/" title="Hébergé par Netlify">
            <img src={netlify} target="_blank" rel="noopener noreferrer" className="footer-img" />
          </a>
          <a href="https://www.gatsbyjs.org/" title="Créé à l’aide de Gatsby">
            <img src={gatsby} target="_blank" rel="noopener noreferrer" className="footer-img" />
          </a>
        </div>
      </footer>
    )
  }
}
