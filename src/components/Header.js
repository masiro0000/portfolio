import React from 'react';
import logoIcon from '../images/header_logo.svg';
import { Link } from 'react-router-dom';

export const Header = ({ setIsOpen }) => {
  const APP_NAME = "portfolio";

  return (
    <header className="header_section">
      <Link 
        to={APP_NAME + '/'}
        className="normal_link"
        smooth={true}
        duration={500}
        offset={-50}
        onClick={() => setIsOpen(false)}
      >
        <h1 className="top_logo">           
          <img src={logoIcon} alt="logo" />
        </h1>
      </Link>
    
      <nav className="header_inner">
        <ul>
          <li>
            <Link 
              to={APP_NAME + '/'}
              className="normal_link"
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setIsOpen(false)}
            >
              <h4 className="link_title">home</h4>
            </Link>
          </li>
          <li>
            <Link 
              className="normal_link"
              to="/about/content"
              onClick={() => setIsOpen(false)}
            >
              <h4 className="link_title">about</h4>
            </Link>
          </li>
          <li>
            <Link 
              className="normal_link"
              to="/works/content"
              onClick={() => setIsOpen(false)}
            >
              <h4 className="link_title">works</h4>
            </Link>
          </li>
          <li>
            <a 
              className="normal_link"
              href="mailto:a.mashita.works@gmail.com"
              onClick={() => setIsOpen(false)}
            >
              <h4 className="link_title">contact</h4>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
