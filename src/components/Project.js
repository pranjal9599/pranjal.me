import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ProjectHeading = styled.h2`
	font-family: nb;
	font-weight: normal;
	font-size: 4em;
	color: rgba(255,255,255,0.5);
	padding-top: 0px; margin-top: 0px;
	transition: color 0.2s;
	&:hover {
		color: rgba(255,255,255,0.7);
	}
	@media (max-width: 700px) {
		font-size: 2em;
	}
`	
const ProjectDescription = styled.div`
	display: flex;
	@media (max-width: 700px) {
		flex-direction: column;
	}
`
const ProjectCount = styled.h5`
	font-size: 2em;
	font-weight: normal;
	margin-bottom: 0px; padding-bottom: 0px;
	@media (max-width: 700px) {
		font-size: 1em;
	}
`

const ProjectInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
`

const ProjectMeta = styled.div`
	display: flex;
	align-items: space-between;
	p {
		font-size: 1em;
		line-height: 1.5;
	}
	flex: 2;
`

const Project = ({ id, title, info, meta, image, path }) => (
	<>
		<ProjectCount>Project {id} &#10230;</ProjectCount>
		<Link to={path}><ProjectHeading>{title}</ProjectHeading></Link>
		<img src={image} alt={title}/>
		<ProjectDescription>
			<ProjectInfo>{info}</ProjectInfo>
			<ProjectMeta>
				<p dangerouslySetInnerHTML={{ __html: meta }}></p>
			</ProjectMeta>
		</ProjectDescription>
	</>
);

export default Project;
