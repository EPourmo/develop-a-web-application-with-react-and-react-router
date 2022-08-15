import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Card from "../components/Card";
import data from "../data/data.json";
import Wrapper from "../components/Wrapper";
import Frame from "../components/Frame";
import Footer from "../components/Footer";
import "../styles/normalize.css";
import "../styles/pages/app.scss";

import { Link } from "react-router-dom";

export default function Home() {
  const cards = data.map((location) => {
    return (
      <Link to={`/rentals/${location.id}`} key={location.id}>
        <Card image={location.cover} title={location.title} />
      </Link>
    );
  });

  const highlight = {
    home: true,
    about: false,
  };

  return (
    <>
      <Frame>
        <Navbar highlight={highlight} />
        <Banner homepage={true} />
        <Wrapper>{cards}</Wrapper>
      </Frame>
      <Footer />
    </>
  );
}
