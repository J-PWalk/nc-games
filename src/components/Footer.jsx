import React from 'react';
import linkedinLogo from '../images/LI-In-Bug.png';
import GitHubLogo from '../images/github-mark.png';
import RocketPugLogo from '../images/RocketPugProductions.jpeg';

function Footer() {
  return (
    <footer className="footer">
       <p>Follow me on:{' '}
          <a href="https://www.linkedin.com/in/john-paul-walker/">
            <img src={linkedinLogo} alt="LinkedIn Logo" className="app-logo" />
          </a>{' '}
          |{' '}
          <a href="https://github.com/J-PWalk">
            <img src={GitHubLogo} alt="Github Logo" className="app-logo" />
          </a></p> 
      
      <div>
        <img src={RocketPugLogo} alt="RocketPug Logo" className="logo" /><p>© Rocket Pug Productions</p>
        &copy; 2023 Northcoder Game Nexus. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;