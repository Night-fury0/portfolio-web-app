import './App.css'
import {NavBar} from './NavBar'
// import {Body} from './Body'

function Gallery() {
  return (
    <div>
      <div className='backgroundImage'/>
      <NavBar/>
      <div className="body">
            <div className='content'>
                GALLERY
            </div>
		  </div>
    </div>
  );
}

export default Gallery;
