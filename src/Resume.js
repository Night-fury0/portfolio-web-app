import './App.css'
import {NavBar} from './NavBar'


function Resume() {
  return (
    <div>
      <div className='backgroundImage'/>
      <NavBar/>
      <div className='content'>
        RESUME <br/><br/>
        <img className='resumeImage' src="resume-1.png"/>
		  </div>
    </div>
  );
}

export default Resume;
