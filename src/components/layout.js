import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import './layout.css'

const About = styled.div`
	position: fixed;
	top: 50%; left: 0;
	transform: rotate(-90deg);
	text-transform: uppercase;
	z-index: 100000;
`

const MainContainer = styled.div`
	padding: 10px;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
				<About><Link to="/">Home</Link></About>
				<MainContainer>
          {children}
				</MainContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
