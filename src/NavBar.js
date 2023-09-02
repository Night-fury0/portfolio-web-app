import React from 'react'
import {NavLink as Link} from 'react-router-dom'
// import styled from 'styled-components'
import './NavBar.css'



export function NavBar(){
	return(
        <table>
          {/* <td><button><Link className="navlink" to="/">Home</Link></button></td> */}
          <td><Link className="navlink" to="/">HOME</Link></td>
          <td><Link className="navlink" to="/resume">RESUME</Link></td>
          <td><Link className="navlink" to="/gallery">GALLERY</Link></td>
          <td><Link className="navlink" to="/contact">CONTACT</Link></td>
        </table>
	);
}


