import data from "../data/data.json";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Frame from "../components/Frame";
import RentalTitle from "../components/RentalTitle";
import RentalTag from "../components/RentalTag";
import RentalHost from "../components/RentalHost";
import { useParams } from "react-router-dom";
import RentalStar from "../components/RentalStar";
import Footer from "../components/Footer";
import "../styles/pages/Rental.scss";

export default function Rental() {
  const { rentalId } = useParams();
  const thisCard = data.find((rental) => rental.id === rentalId);

  const highlight = {
    home: false,
    about: false,
  };

  return (
    <>
      <Frame>
        <Navbar highlight={highlight} />
        <Slider pictures={thisCard.pictures} />
        <div className="rental__details">
          <div className="title_tags">
            <RentalTitle title={thisCard.title} location={thisCard.location} />
            <RentalTag tags={thisCard.tags} />
          </div>
          <div className="host-star">
            <RentalHost
              name={thisCard.host.name}
              picture={thisCard.host.picture}
              className="host"
            />
            <RentalStar rate={thisCard.rating} />
          </div>
        </div>
      </Frame>
      <Footer />
    </>
  );
}
