import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Frame from "../components/Frame";
import "../styles/normalize.css";
import "../styles/pages/app.scss";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

export default function About() {
  const highlight = {
    home: false,
    about: true,
  };

  return (
    <>
      <Frame>
        <Navbar highlight={highlight} />
        <Banner homepage={false} />
      </Frame>
      <Footer />
    </>
  );
}
