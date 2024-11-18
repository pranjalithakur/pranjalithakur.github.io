import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import heroImage from '../assets/images/hero-image.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={heroImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/pranjalithakur" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/pranjali-thakur/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Pranjali Thakur</h1>
          <p>Security Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/pranjalithakur" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/pranjali-thakur/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;