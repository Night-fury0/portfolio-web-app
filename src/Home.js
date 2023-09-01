import './App.css'
import {NavBar} from './NavBar'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="App">
      <header className="header">
		<NavBar/>
      </header>
		<div className="body">
		Hello!		
		</div>
    </div>
  );
}

export default Home;
