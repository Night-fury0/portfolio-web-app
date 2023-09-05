import './App.css'
import {NavBar} from './NavBar'
// import {Body} from './Body'

function Contact() {
  return (
    <div>
      <div className='backgroundImage'/>
      <NavBar/>
      <div className="body">
            <div className='content_projects'>
              <b>PROJECTS</b><br/><br/>
              <table className='projects'>
                <tr>
                  <td><img className="projectsIcon" src="tree.svg"/></td>
                  <td className="projectsDesc">
                  <b>Portfolio Webpage</b><br/>
                  <u>Tools</u>: ReactJS, AWS, Javascript, CSS, HTML, Inkscape. <br/>
                  <u>Purpose</u>: To provide personal portfolio information.<br/>
                  <u>Description:</u> Hosted as a static web application using AWS S3 and Route53.
                  </td>
                </tr>
                <tr>
                <td><img className="projectsIcon" src="app_icon_square.svg"/></td>
                  <td className='projectsDesc'>
                  <b>Chennai Weather Android App</b><br/>
                  <u>Tools</u>: Kotlin, Android Studio, Inkscape. <br/>
                  <u>Purpose</u>: To provide latest weather information of Chennai from various public sources under one roof. <br/>
                  <u>Description:</u> Features include current weather & forecast, automatic weather stations & rain gauges, radar, satellite and lake level. Published on Google Play Store.
                  </td>
                </tr>
              </table>
            </div>
		  </div>
    </div>
  );
}

export default Contact;
