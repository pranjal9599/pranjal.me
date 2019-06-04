import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.header`
	padding: 10px 0px;
	display: flex;
	top: 0;
	width: 100%;
	background-color: rgba(13,14,15,1);
	z-index: 100;
  a {
		padding: 10px;
		text-decoration: none;
		font-size: 14px;
		text-transform: uppercase;
		border-bottom: 1px solid rgba(13,14,15,1);
		transition: all 0.2s;
		&:hover {
			border-bottom: 1px solid #fff;
		}
	}
`


const Header = ({ }) => (
	<HeaderContainer>
		<Link to="/">Projects</Link>
		<Link to="/about">About</Link>
		<Link to="/">Blog</Link>
	</HeaderContainer>
)


export default Header
