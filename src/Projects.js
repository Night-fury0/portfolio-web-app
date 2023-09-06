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
              <br/>
              PORTFOLIO WEB APP
              <table className='projects'>
                <tr>
                  <td><img className="projects_icon" src="tree.svg"/></td>
                  <td className="projectsDesc">
                  <b>TOOLS</b>: ReactJS, AWS, Javascript, CSS, HTML, Inkscape. <br/>
                  <b>PURPOSE</b>: To serve as my personal portfolio website, showcasing my skills and projects.<br/>
                  <b>DESCRIPTION</b>: Developed as a static web application using ReactJS for the frontend. The website is hosted on AWS S3 and utilizes AWS Route53 domain management.<br/>
                  <b>AVAILABILITY</b>: You can visit the website at http://rmsriram.net<br/><br/>
                  <a href="https://github.com/Night-fury0/portfolio-web-app"><img src="github.png" className="contact_icons"></img></a> &nbsp;&nbsp;
                  <a href="http://rmsriram.net"><img src="web.png" className="contact_icons"></img></a>
                  </td>
                </tr>
                </table>
                <br/>
                CHENNAI WEATHER ANDROID APP
                <table className='projects'>
                <tr>
                <td><img className="projects_icon" src="app_icon_square.svg"/></td>
                  <td className='projectsDesc'>
                  <b>TOOLS</b>: Kotlin, Android Studio, Inkscape. <br/>
                  <b>PURPOSE</b>: To consolidate and present latest weather information for Chennai, sourced from various public providers, within a single, user-friendly interface.<br/>
                  <b>DESCRIPTION</b>: The app includes features like current weather, forecast, radar, satellite, weather stations, rainfall and lake level. <br/>
                  <b>AVAILABILITY</b>: You can download for free from Google Play Store.<br/><br/>
                  <a href="https://github.com/Night-fury0/chennai-weather-android-app"><img src="github.png" className="contact_icons"></img></a> &nbsp;
                  <a href='https://play.google.com/store/apps/details?id=nightfury0.android.chennaiweather&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img className="contact_icons" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
                  </td>
                </tr>
              </table>
            </div>
		  </div>
    </div>
  );
}

export default Contact;
