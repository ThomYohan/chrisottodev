import PropTypes from 'prop-types'
import React from 'react'
import { Link, graphql } from 'gatsby'
import { ThemeContext } from '../layouts'
import Blog from '../components/Blog'
import SubHeadline from '../components/Article/SubHeadline'
import Work from '../components/Work'
import Skill from '../components/Skill'
import Hero from '../components/Hero'
import Seo from '../components/Seo'
import Article from '../components/Article'
import Education from '../components/Work/Education'
import Headline from '../components/Article/Headline'
import Volunteer from '../components/Work/Volunteer'
import About from '../pages/about.js'

class IndexPage extends React.Component {
  separator = React.createRef()

  scrollToContent = (e) => {
    this.separator.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  render() {
    const {
      data: {
        bgDesktop: {
          resize: { src: desktop },
        },
        bgTablet: {
          resize: { src: tablet },
        },
        bgMobile: {
          resize: { src: mobile },
        },
      },
    } = this.props

    const backgrounds = {
      desktop,
      tablet,
      mobile,
    }

    return (
      <React.Fragment>
        <React.Fragment>
          <ThemeContext.Consumer>
            {(theme) => (
              <Hero
                scrollToContent={this.scrollToContent}
                backgrounds={backgrounds}
                theme={theme}
              />
            )}
          </ThemeContext.Consumer>
          <hr ref={this.separator} />
        </React.Fragment>

        <Seo />

        <style jsx>{`
          hr {
            margin: 0;
            border: 0;
          }
        `}</style>
      </React.Fragment>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default IndexPage

// eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery($skip: Int!, $limit: Int!) {
    posts: allMdx(
      filter: {
        fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" }
        frontmatter: { published: { eq: true } }
      }
      sort: { fields: [fields___prefix], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            tags
            author
            cover {
              children {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
    bgDesktop: imageSharp(fluid: { originalName: { regex: "/mesh/" } }) {
      resize(width: 1200, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgTablet: imageSharp(fluid: { originalName: { regex: "/mesh/" } }) {
      resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgMobile: imageSharp(fluid: { originalName: { regex: "/mesh/" } }) {
      resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`
