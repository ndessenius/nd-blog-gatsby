import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import GitHubButton from 'react-github-btn'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import SimpleListing from '../components/SimpleListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import projects from '../../data/projects'
import speaking from '../../data/speaking'
import podcasts from '../../data/podcasts'
import quotes from '../../data/quotes'
import hesperis from '../../content/images/avatar.png'
import background from '../../content/images/intothenight.svg'

export default class Index extends Component {
  render() {
    const { data } = this.props

    const latestPostEdges = data.latest.edges
    const popularPostEdges = data.popular.edges

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Developer & Writer`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <h1>Bienvenue !</h1>
              <p>
               Je suis Nicolas. Auteur amateur, développeur web et sysadmin. J’essaie également de dessiner pendant mon temps libre.
              </p>
              <div className="social-buttons">
                <div>
                  <a
                    className="twitter-follow-button"
                    href="https://twitter.com/ndessenius"
                    data-size="large"
                    data-lang="fr"
                    data-dnt="true"
                    data-show-screen-name="false"
                  >
                    Suivre
                  </a>

                </div>
                <div>
                  <GitHubButton
                    href="https://github.com/ndessenius"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Follow @ndessenius on GitHub"
                  >
                    Suivre
                  </GitHubButton>
                </div>
              </div>
            </div>


          <div className="newsletter-section">
              <img src={background} className="newsletter-avatar" alt="hesperis" />
              <div>
               
              </div>
            </div>
          </div>
        </div>

        <div className="container front-page">
          <section className="section">
            <h2>
              Derniers articles
              <Link to="/blog" className="view-all">
                Voir tout
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>
              Les plus populaires
              <Link to="/categories/popular" className="view-all">
                Voir tout
              </Link>
            </h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>

          {/* <section className="section">
            <h2>Open Source Projects</h2>
            <ProjectListing projects={projects} />
          </section> */}

          {/* <section className="section">
            <h2>Podcasts</h2>
            <SimpleListing simple data={podcasts} />
          </section>

          <section className="section">
            <h2>Speaking</h2>
            <SimpleListing simple data={speaking} />
          </section> */}

          {/* <section className="section">
            <h2>{`Other People's Opinions`}</h2>
            <div className="quotations">
              {quotes.map(quote => (
                <blockquote className="quotation" key={quote.name}>
                  <p>{quote.quote}</p>
                  <cite>— {quote.name}</cite>
                </blockquote>
              ))}
            </div>
          </section> */}

        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 7
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
