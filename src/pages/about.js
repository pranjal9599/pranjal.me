import React from "react";
import Layout from '../components/layout';
import { Container } from '../components/Common';
import styled from 'styled-components';

const Paragraph = styled.p`
	color: #fff;
	font-size: 2rem;
	line-height: 1;
`


const About = () => (
	<Layout>
		<Container>
			<Paragraph>Hi, I&apos;m Pranjal Saxena.</Paragraph>
			<Paragraph>I design and code modern websites and apps.</Paragraph>
		</Container>
	</Layout>
)

export default About;
