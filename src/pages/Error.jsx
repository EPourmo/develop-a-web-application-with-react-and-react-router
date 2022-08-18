import Navbar from "../components/Navbar";
import Frame from "../components/Frame";
import { Link } from "react-router-dom";
import "../styles/pages/Error.scss";

export default function Error() {
  return (
    <Frame>
      <Navbar
        highlight={{
          home: false,
          about: false,
        }}
      />
      <div className="error">
        <h1 className="error__404">404</h1>
        <p className="error__msg">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="error__link">
          <p>Retourner sur la page d’accueil</p>
        </Link>
      </div>
    </Frame>
  );
}
