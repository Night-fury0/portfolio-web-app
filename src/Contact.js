import './App.css'
import {NavBar} from './NavBar'

function Contact() {
  return (
    <div>
      <div className='backgroundImage'/>
      <NavBar/>
      <div className="body">
            <div className='content_contact'>
              <b>CONTACT</b><br/><br/>
              <img className="photoImage" src="photo.png"></img>
              <br/><br/><div className="name">R M SRIRAM</div><br/>
              <div className='roles'>
              Big Data Engineer<br/>
              Full Stack Developer<br/><br/>
              Chennai, India
              </div><br/>
              <a href="mailto:sriram19990127@gmail.com" title="gmail icons"><img src="gmail.png" className='contact_icons'></img></a>&nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/sriram-r-m/"><img src="linkedin.png" className="contact_icons"/></a>&nbsp;&nbsp;
              <a href="https://github.com/Night-fury0"><img src="github.png" className="contact_icons"/></a><br/>
            </div>
		  </div>
    </div>
  );
}

export default Contact;

