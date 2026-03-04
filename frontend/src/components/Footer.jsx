import React from "react";
import "../css/Footer.css";
function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Movie App. All rights reserved.</p>
      <div className="creator-info">
        <p>Built by me. I learn by creating it.</p>
        <div className="footer-links">
          <a
            href="https://github.com/degifetise/movie-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/degife-tise-a42878351?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWORHOXWySJWXadpL2JAD7Q%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
