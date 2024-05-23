//componente de header/area de contrate/trabalhe
import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/viverde-logo.svg";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={Logo} alt="logo" />
      </div>

      <nav
        className={`nav-options ${showMenu ? "show" : ""}`}
        onClick={toggleMenu}
      >
        <div className="nav-texts">
          <a
            href="https://www.youtube.com/watch?v=7J7kVF24IhA"
            target="_blank"
            className="nav-text hover"
            rel="noreferrer"
          >
            Como funciona
          </a>
          <a href="/contrate" className="nav-text hover">
            Serviços
          </a>
        </div>

        <div className="nav-button">
          <Link to="/contrate">
            <a href="" className="find-pro">
              Encontre um profissional
            </a>
          </Link>

          <Link to="/trabalhe">
            <a href="" className="offer-serv">
              Ofereça seus serviços
            </a>
          </Link>

          <Link to="/parceria">
            <a href="" className="offer-part">
              Seja uma parceira(o)
            </a>
          </Link>
        </div>
      </nav>

      <div className="menuButton" onClick={toggleMenu}>
        <span className="linha"></span>
        <span className="linha"></span>
        <span className="linha"></span>
      </div>
    </header>
  );
}

export default Header;
