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
                <b>CONTACT</b><br/><br/>
                <img className="photoImage" src="photo.png"></img>
                <br/><br/>R M SRIRAM<br/><br/>
                Big Data Engineer<br/>
                Full Stack Developer<br/><br/>
                    Chennai, India<br/><br/>
                    sriram19990127@gmail.com<br/><br/>
                    <a href=""><img src="linkedin.png" className="contact_icons"/></a>&nbsp;&nbsp;
                    <a href="https://github.com/Night-fury0"><img src="github.png" className="contact_icons"/></a><br/>
            </div>
		  </div>
    </div>
  );
}

export default Contact;

