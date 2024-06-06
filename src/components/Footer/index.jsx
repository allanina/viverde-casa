import React from "react";
import "./styles.css";
import Logo from "../../assets/Logo Branca.png";
import Insta from "../../assets/instagram-white.png";
import LinkedIn from "../../assets/linkedin-white.png";
import megafone from "../../assets/megafone.png";
import youtube from "../../assets/youtube.png";

function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="imgLogo">
          <img src={Logo} alt="logo branca viverde" />
        </div>

        <div className="emailSite">
          <p>
            <strong>Email: </strong> Contato@viverdecasa.com
          </p>
          <p>
            <strong>Site Institucional: </strong> www.viverdecasa.com
          </p>
        </div>

        <div className="redeSociaisIcon">
          <h3>Rede Sociais</h3>

          <a
            href="https://www.instagram.com/viverdecasa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img className="insta" src={Insta} alt="" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/company/viverde-casa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img className="linkd" src={LinkedIn} alt="" />{" "}
          </a>
          <a
            href="https://medium.com/@viverdecasa"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img className="megafone" src={megafone} alt="" />{" "}
          </a>
          <a
            href="https://www.youtube.com/@viverdecasa7207"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img className="youtube" src={youtube} alt="" />{" "}
          </a>
        </div>
      </div>
      <div className="rodape">
        <p>© 2023 | Viverde Casa - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
