import React from 'react';
import linkedinLogo from '../images/LI-In-Bug.png';
import GitHubLogo from '../images/github-mark.png';


function Footer() {
  return (
    <footer className="footer">
      <nav>
        <a href="/about">About</a>
      </nav>
      <div>
        <p>&copy; 2023 Northcoder Game Nexus. All rights reserved.</p>
      </div>
      <div>
        <p>Contact: john.paul.walker@hotmail.co.uk</p>
        <p>Follow me on: <a href="https://www.linkedin.com/in/john-paul-walker/"><img src={linkedinLogo} alt="LinkedIn Logo" className="app-logo" /></a> | <a href="https://github.com/J-PWalk"><img src={GitHubLogo} alt="Github Logo" className="app-logo" /></a></p>
      </div>
    </footer>
  );
}

export default Footer;
