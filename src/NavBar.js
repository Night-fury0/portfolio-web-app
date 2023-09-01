import React from 'react'
import {NavLink as Link} from 'react-router-dom'
// import styled from 'styled-components'
import './NavBar.css'



export function NavBar(){
	return(
    <nav>
      <ul>
        <table>
          <td><Link className="navlink" to="/">Home</Link></td>
          <td><Link className="navlink" to="/resume">Resume</Link></td>
          <td><Link className="navlink" to="/weather">Weather</Link></td>
          <td><Link className="navlink" to="/gallery">Gallery</Link></td>
          <td><Link className="navlink" to="/contact">Contact</Link></td>
        </table>
      </ul>
    </nav>	
	);
}


