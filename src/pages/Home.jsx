import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import Frame from "../components/Frame";
import Footer from "../components/Footer";
import "../styles/normalize.css";

import { Link } from "react-router-dom";

export default function Home({ rentals }) {
  const cards = rentals.map((rental) => {
    return (
      <Link to={`/rentals/${rental.id}`} key={rental.id}>
        <Card image={rental.cover} title={rental.title} />
      </Link>
    );
  });

  return (
    <>
      <Frame>
        <Navbar
          highlight={{
            home: true,
            about: false,
          }}
        />
        <Banner homepage={true} />
        <Wrapper>{cards}</Wrapper>
      </Frame>
      <Footer />
    </>
  );
}
