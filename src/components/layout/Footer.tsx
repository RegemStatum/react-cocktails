import React, { FC } from "react";
import { Link } from "react-router-dom";
import navLinks from "../../constants/navLinks";
import Logo from "./Logo";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="line-separator"></div>
      <div className="footer__container container">
        <div className="footer__links-logo-container">
          <Logo styleName="footer" />
          <nav className="nav footer__nav">
            <div className="nav__container footer__nav-container">
              {navLinks.map((link) => (
                <Link
                  to={link.to}
                  className={`nav__link footer__nav-link`}
                  key={link.id}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
        <div className="footer__info">
          <p className="footer__made-by">
            Made and Designed by Aleksandr Kondratov
          </p>
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Cocktails
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
