import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div class="footer-content">
        <ul class="social-links">
          <li>
            <a
              href="https://www.linkedin.com/in/christian-espindola-analista/"
              className="btn"
              alt="linkedin Christian Espindola"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ChristianEspindola"
              className="btn"
              alt="Github Christian Espindola"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
