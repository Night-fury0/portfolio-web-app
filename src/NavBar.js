import React from 'react'
import {NavLink as Link} from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  padding: 10px;
  display: flex;
  position: fixed;
  width: 100%; 
`;

const NavLink = styled(Link)`
  padding: 10px;
  color: lightgreen;
  margin: 0 10px;
  text-decoration: none;
  text-align: center;
  flex: 1;
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const li = styled.li`
 text-align: center;
`;
export function NavBar(){
	return(
	<Nav>
	<NavMenu>
	<li><NavLink to="/">Home</NavLink></li>
	<li><NavLink to="/resume">Resume</NavLink></li>
	<li><NavLink to="/projects">Projects</NavLink></li>
	<li><NavLink to="/gallery">Gallery</NavLink></li>
	<li><NavLink to="/contact">Contact</NavLink></li>
	</NavMenu>
	</Nav>	
	);
}


