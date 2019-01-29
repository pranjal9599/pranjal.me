import React from 'react'
import styled from 'styled-components';
import { graphql } from 'gatsby'

import Layout from '../components/layout';
import Project from '../components/Project';
import { Container } from '../components/Common';

const Heading = styled.h1`
	font-size: 6em;
	letter-spacing: -0.07em;
	line-height: 1;
	margin: 0;padding:100px;
	@media(max-width: 700px) {
		padding: 0px;
		font-size: 3em;
	}
	span {
		font-size: 2rem;
		font-weight: normal;
		display: block;
		margin: 40px 0px;
		letter-spacing: 0em;
		opacity: .5;
	}
`


const IndexPage = ({ data }) => (
	<>
	<Layout>
		<Heading>
			<span>Pranjal Saxena</span>
			Hi, I am a Digital Product Designer currently based in India.
			<span>
				<a href="https://twitter.com/pranjal9599">Twitter</a>&mdash;
				<a href="https://github.com/pranjal9599">Github</a>&mdash;
				<a href="mailto:pranjal9599@gmail.com">Mail</a>
			</span>
		</Heading>
	<Container>
		{data.allMarkdownRemark.edges.map((project, i) => 
			<Project 
				{...project.node.frontmatter} 
				id={i+1}
				key={i}
				meta={project.node.frontmatter.tagline}
			/>
		)}

		<a 
			href="https://github.com/pranjal9599/pranjal.me"
			style={{
				opacity: 1,
				textAlign: 'center',
				width: '100%',
				display: 'block',
				margin: '40px 0px'
			}}
		> <b>&mdash; Coded from scratch with Gatsby &mdash;</b></a>

	</Container>

	</Layout>
	</>
)

export const query = graphql`
{
  allMarkdownRemark(
    sort: {order:DESC, fields:[frontmatter___date]}
    limit:1000
  ) {
    edges {
      node {
        frontmatter {
          path
          date
					image
					title
					info
					tagline
        }
				rawMarkdownBody
      }
    }
  }
}
`

export default IndexPage
