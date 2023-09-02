import React from "react"
import {Routes, Route} from 'react-router-dom'
import Home from './Home.js'
import PrivacyPolicy from './PrivacyPolicy.js'
import Resume from './Resume.js'
import Gallery from './Gallery.js'
import Contact from './Contact.js'

function App(){
	return(
	<div>
		<Routes>
			<Route exact path = "/" element={<Home/>}/>
			<Route path = "/privacy-policy" element={<PrivacyPolicy/>}/>
			<Route path = "/resume" element={<Resume/>}/>
			<Route path = "/gallery" element={<Gallery/>}/>
			<Route path = "/contact" element={<Contact/>}/>
		</Routes>
	</div>
);
}

export default App;
