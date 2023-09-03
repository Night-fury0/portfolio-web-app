import './App.css'
import {NavBar} from './NavBar'
// import {Body} from './Body'

function Contact() {
  return (
    <div>
      <div className='backgroundImage'/>
      <NavBar/>
      <div className="body">
            <div className='content_contact'>
                CONTACT<br/><br/>
                <img className="photoImage" src="photo.svg"></img>
                <br/><br/>R M SRIRAM<br/><br/>
                FULL STACK DEVELOPER<br/>
                BIG DATA ENGINEER<br/><br/>
                Email: sriram19990127@gmail.com<br/><br/>
                Linkedin<br/>
                Github<br/>

            </div>
		  </div>
    </div>
  );
}

export default Contact;
