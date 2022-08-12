import data from "../data/data.json";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Frame from "../components/Frame";
import RentalTitle from "../components/RentalTitle";
import RentalTag from "../components/RentalTag";
import RentalHost from "../components/RentalHost";
import { useParams } from "react-router-dom";
import RentalStar from "../components/RentalStar";

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
        <RentalTitle title={thisCard.title} location={thisCard.location} />
        <RentalTag tags={thisCard.tags} />
        <RentalHost name={thisCard.host.name} picture={thisCard.host.picture} />
        <RentalStar rate={thisCard.rating} />
      </Frame>
    </>
  );
}
