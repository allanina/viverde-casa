import "./styles.css";
import Logo from "../../assets/Logo Branca.png";

function Footer() {
  return (
    <footer>

      <div className="footer">
        <picture className="logo-footer">
          <img src={Logo} alt="Logo Viverde Branca" />
        </picture>

        <a
          href="https://www.instagram.com/viverdecasa/"
          target="_blank"
          rel="noreferrer"
        >
          Redes Sociais
        </a>
      </div>

      <div className="rodape">
        <p>© 2023 | Viverde Casa - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
