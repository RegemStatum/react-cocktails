import React, { FC, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import navLinks from "../../constants/navLinks";
import Logo from "./Logo";

interface Styles extends React.CSSProperties {
  openMenu: {
    height: number;
  };
  closeMenu: {
    height: number;
  };
}

const Header: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [linksHeight, setLinksHeight] = useState(0);
  const linksContainer = useRef<HTMLDivElement>(null);

  const styles = {
    openMenu: {
      height: linksHeight,
    },
    closeMenu: {
      height: 0,
    },
  } as Styles;

  const toggleShowMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const height = Number(
      linksContainer.current?.getBoundingClientRect().height
    );
    setLinksHeight(height);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linksContainer, window.innerWidth]);

  return (
    <header className="header">
      <div className="line-separator"></div>
      <div className="header__container container">
        <Logo styleName="header" />
        <button
          className={`burger-menu header__burger-menu ${
            isNavOpen ? "burger-menu_open" : "burger-menu_close"
          }`}
          type="button"
          onClick={toggleShowMenu}
        >
          <div className="burger-menu__item"></div>
          <div className="burger-menu__item"></div>
          <div className="burger-menu__item"></div>
        </button>
        <nav
          className={`nav header__nav`}
          style={isNavOpen ? styles.openMenu : styles.closeMenu}
        >
          <div
            className="nav__container header__nav-container"
            ref={linksContainer}
          >
            {navLinks.map((link) => (
              <Link
                to={link.to}
                className={`nav__link header__nav-link`}
                key={link.id}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
