import React from "react";
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { Container } from '../Common';
import Layout from '../layout';

const Heading = styled.h2`
	font-weight: normal;
	font-size: 5em;
	@media(max-width: 700px) {
		font-size: 2.5rem;
	}
`

const C = styled.span`
	margin-right: 15px;
`

const NavLinks = styled.div`
	display: flex;
	margin: 30px 0px;
	justify-content: space-between;
	@media( max-width: 700px) {
		flex-direction: column;
		span {
			margin: 10px 0px;
		}
	}
`

export default function Template(props) {
  const post = props.data.markdownRemark; 
	const next = props.pageContext.next.frontmatter;
	const prev = props.pageContext.prev.frontmatter;
  return (
		<Layout>
		<Container>
    	<Heading>{post.frontmatter.title}</Heading>
			{ post.frontmatter.info.split(",").map((c,i) =>
				<C key={i}>&#9632; {c}</C>
			)}
			<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
			<NavLinks>
				{ prev ? <span><Link to={prev.path}>&#8592; {prev.title}</Link></span> : <span></span> }
				{ next ? <span><Link to={next.path}>{next.title} &#8594;</Link></span> : <span></span> }
			</NavLinks>
		</Container>
		</Layout>
  );
}

export const pageQuery = graphql`
  query PortfolioPiece($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
				info
      }
    }
  }
`
;

