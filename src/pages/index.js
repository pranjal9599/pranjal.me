import React from 'react'
import styled from 'styled-components';
import { graphql } from 'gatsby'

import Layout from '../components/layout';
import Project from '../components/Project';
import { Container } from '../components/Common';

const Heading = styled.h1`
	font-size: 5em;
	font-weight: 800;
	margin: 0;padding:50px;
	line-height: 1;
	text-align: center;
	@media(max-width: 700px) {
		padding: 0px;
		font-size: 2.2rem;
		text-align: left;
	}
	span {
		font-size: 2rem;
		display: block;
		margin: 40px 0px;
		a {
			text-decoration: none;
		}
		@media(max-width: 700px) {
			font-size: 1.5rem;
		}
	}
`

const HeaderDiv = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	aling-items: center;
	justify-content: center;
	@media(max-width: 700px) {
		justify-content: flex-end;
	}
`


const IndexPage = ({ data }) => (
	<>
	<Layout>
		<HeaderDiv 
			data-aos="fade-up"
			data-aos-offset="200"
			data-aos-delay="50"
			data-aos-duration="1000"
		>
			<Heading>
				Hi, I am Pranjal Saxena a Digital Product Designer &amp; Developer.
				<span>
					<a href="https://twitter.com/pranjal9599">Twitter</a>&mdash;
					<a href="https://github.com/pranjal9599">Github</a>&mdash;
					<a href="mailto:pranjal9599@gmail.com">Mail</a>
				</span>
			</Heading>
		</HeaderDiv>
	<Container>
		{data.allMarkdownRemark.edges.map((project, i) => 
			<div 
				data-aos="fade-up"
				data-aos-offset="400"
				data-aos-delay="200"
				data-aos-duration="1000"
				key={i}>
			<Project 
				{...project.node.frontmatter} 
				id={i+1}
				key={i}
				meta={project.node.frontmatter.tagline}
			/>
			</div>
		)}

		<a 
			href="https://github.com/pranjal9599/pranjal.me"
			style={{
				opacity: 1,
				textAlign: 'center',
				width: '100%',
				textDecoration: 'none',
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
