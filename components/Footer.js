import React from 'react';
import { footerStyles } from 'styles';
import { FaDribbble, FaLinkedin, FaGithub } from 'react-icons/fa';

/**
 * Site footer component
 */
const Footer = () => (
  <footer>
    <p>
    This blog is an open source project. You’re welcome to submit suggestions, issues and fork it visiting its <a href="https://github.com/alansiq/devlog">github repo</a>.
    </p>
    <br />

        <div className="socials">
          <a href="https://github.com/alansiq">
            <FaGithub  />
          </a>
          <a href="https://www.linkedin.com/in/alanpsiqueira/">
            <FaLinkedin />
          </a>
          <a href="https://dribbble.com/alansiqueira">
            <FaDribbble  />
          </a>
        </div>
    <style jsx global>{footerStyles}</style>
  </footer>
)

export default Footer
