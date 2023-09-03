import './App.css'
import {NavBar} from './NavBar'
// import {Body} from './Body'

function Contact() {
  return (
    <div>
      <div className='backgroundImage'/>
      <NavBar/>
      <div className="body">
            <div className='content'>
              PROJECTS<br/><br/>
              <table className='projects'>
                <tr>
                  <td><img className="projectsIcon" src="tree.svg"/></td>
                  <td>
                    <div>
                      <b>Portfolio Web App</b><br/>
                      Developed using ReactJS, Javascript, HTML & CSS. Hosted using S3 and Route53.
                    </div>
                  </td>
                </tr>
                <tr>
                <td><img className="projectsIcon" src="app_icon_square.svg"/></td>
                  <td>
                  <b>Chennai Weather Android App</b><br/>
                  Developed using Kotlin in Android Studio. Uses public data APIs to gather latest weather information of Chennai at one place. Published on Google Play Store.
                  </td>
                </tr>
              </table>
            </div>
		  </div>
    </div>
  );
}

export default Contact;
