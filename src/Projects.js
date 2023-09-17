import './App.css'
import {NavBar} from './NavBar'

function ProjectIcons(){
  return(
    <div className="project_links_container">
      <a href="https://github.com/Night-fury0/portfolio-web-app"><img src="github.png" className="contact_icons"></img></a> &nbsp;&nbsp;
      <a href="http://rmsriram.net"><img src="web.png" className="contact_icons"></img></a>
    </div>
  );
}

function Project2Icons(){
  return(
    <div className="project_links_container">
    <a href="https://github.com/Night-fury0/chennai-weather-android-app"><img src="github.png" className="contact_icons"></img></a> &nbsp;
    <a href='https://play.google.com/store/apps/details?id=nightfury0.android.chennaiweather&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img className="contact_icons" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
    </div>
  );
}

function ProjectContainer({icon, header, tools, purpose, description, availablity, project_icons}){
  return(
    <div>
    <table className='projects'>
      <tr>
        <td><img className="projects_icon" src={icon}/></td>
        <td><div className="project_header"><b>{header}</b></div></td>
      </tr>
      <tr>
        <td className="projectsDesc" colspan="2">
          <b>TOOLS</b>: {tools} <br/>
          <b>PURPOSE</b>: {purpose}<br/>
          <b>DESCRIPTION</b>: {description}<br/>
          <b>AVAILABILITY</b>: {availablity}<br/><br/>
          <center>
          {project_icons}
          </center>
        </td>
      </tr>
    </table>
    <br/>
    </div>
    
  );
}

function Projects() {
  return (
    <div>
      <div className='backgroundImage'/>
      <NavBar/>
      <div className="body">
            <div className='content_projects'>
              <b>PROJECTS</b><br/><br/>
              <br/>
              <ProjectContainer
              icon="tree.svg" 
              header="PORTFOLIO WEBSITE" 
              tools="ReactJS, AWS, Javascript, CSS, HTML, Inkscape." 
              purpose="To serve as my personal portfolio website, showcasing my skills and projects." 
              description="Developed as a static web application using ReactJS for the frontend. The website is hosted on AWS S3 using Route53 & Cloudfront." 
              availablity="You can visit the website at http://rmsriram.net" 
              project_icons=<ProjectIcons/>
              />

              <ProjectContainer
              icon="app_icon_square.svg" 
              header="CHENNAI WEATHER ANDROID APP" 
              tools="Kotlin, Android Studio, Inkscape." 
              purpose="To consolidate and present latest weather information for Chennai, sourced from various public providers, within a single, user-friendly interface." 
              description="The app includes features like current weather, forecast, radar, satellite, weather stations, rainfall and lake level." 
              availablity="You can download for free from Google Play Store." 
              project_icons=<Project2Icons/>
              />
            </div>
		  </div>
    </div>
  );
}

export default Projects;
