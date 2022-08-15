import LOGOwhite from "../assets/LOGOwhite.png";
import "../styles/components/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <img src={LOGOwhite} className="white-logo" alt="logo Kasa" />
        <p className="copyright">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
