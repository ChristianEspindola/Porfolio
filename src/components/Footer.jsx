import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div class="footer-content">
        <ul class="social-links">
          <li>
            <a
              href="https://https://www.linkedin.com/in/christian-espindola-analista/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://https://github.com/ChristianEspindola"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="mailto:tucorreo@ejemplo.com">
              <i class="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
