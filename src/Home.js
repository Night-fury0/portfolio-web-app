import './App.css'
import {NavBar} from './NavBar'

function Home() {
  return (
    <div>
      <div className='backgroundImage'/>
      <NavBar/>
      <div className='content'>
        WELCOME <br/><br/>
        <img className='resumeImage' src="tree.svg"/>
      </div>
    </div>
  );
}

export default Home;
