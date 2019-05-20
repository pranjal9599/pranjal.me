import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'



import './layout.css'
import 'aos/dist/aos.css';

const About = styled.div`
	position: fixed;
	top: 50%; left: 0;
	transform: rotate(-90deg);
	text-transform: uppercase;
	z-index: 100000;
`

const MainContainer = styled.div`
	padding: 10px;
	@media(max-width: 700px) {
		padding: 20px;
	}
`

class Layout extends React.Component {
	componentDidMount() {
		const AOS = require('AOS');
		this.aos = AOS;
		this.aos.init();
	}

	componentDidUpdate() {
		this.aos.refresh();
	}

	render() {
		return (
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
								{ name: 'description', content: 'Pranjal' },
								{ name: 'keywords', content: 'Pranjal Saxena, Product Designer' }
							]}
						>
							<html lang="en" />
						</Helmet>
						<MainContainer>
							{this.props.children}
						</MainContainer>
					</>
				)}
			/>
		)
	}
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
