import React from 'react'
import {NavLink as Link, useLocation} from 'react-router-dom'
// import styled from 'styled-components'
import './App.css'

export function NavBar(){
  const location = useLocation();
	return(
        <table className="top_nav_bar">
          {/* <td><button><Link className="navlink" to="/">Home</Link></button></td> */}
          <td><Link className={location.pathname === "/"?"navlink_active":"navlink"} to="/">HOME</Link></td>
          <td><Link className={location.pathname === "/resume"?"navlink_active":"navlink"} to="/resume">RESUME</Link></td>
          <td><Link className={location.pathname === "/projects"?"navlink_active":"navlink"} to="/projects">PROJECTS</Link></td>
          <td><Link className={location.pathname === "/gallery"?"navlink_active":"navlink"} to="/gallery">GALLERY</Link></td>
          <td><Link className={location.pathname === "/contact"?"navlink_active":"navlink"}to="/contact">CONTACT</Link></td>
        </table>
	);
}


