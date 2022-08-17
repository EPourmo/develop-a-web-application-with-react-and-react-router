import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Frame from "../components/Frame";
import RentalTitle from "../components/RentalTitle";
import RentalTag from "../components/RentalTag";
import RentalHost from "../components/RentalHost";
import { useParams } from "react-router-dom";
import RentalStar from "../components/RentalStar";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import "../styles/pages/Rental.scss";

export default function Rental({ data }) {
  const { rentalId } = useParams();
  const thisCard = data.find((rental) => rental.id === rentalId);

  return (
    <>
      <Frame>
        <Navbar
          highlight={{
            home: false,
            about: false,
          }}
        />
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
            />
            <RentalStar rate={thisCard.rating} />
          </div>
        </div>
        <div className="collapes">
          <div className="collapse__description">
            <Collapse
              title="Description"
              content={thisCard.description}
              listOfElement={false}
              className="first"
            />
          </div>
          <div className="collapse__equipements">
            <Collapse
              title="Équipements"
              content={thisCard.equipments}
              listOfElement={true}
            />
          </div>
        </div>
      </Frame>
      <Footer />
    </>
  );
}
