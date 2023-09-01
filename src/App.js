import React from "react"
import {Routes, Route} from 'react-router-dom'
import Home from './Home.js'
import PrivacyPolicy from './PrivacyPolicy.js'

function App(){
	return(
<div>
	<Routes>
		<Route exact path = "/" element={<Home/>}/>
		<Route path = "/privacy-policy" element={<PrivacyPolicy/>}/>
	</Routes>
</div>
);
}

export default App;
