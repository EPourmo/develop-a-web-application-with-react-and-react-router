import data from "../data/data.json";
import Slider from "../components/Slider";
import { useParams } from "react-router-dom";

export default function Rental() {
  const { rentalId } = useParams();
  //   console.log(rentalId);
  const thisCard = data.find((rental) => rental.id === rentalId);

  return (
    <>
      <h1>{thisCard.title}</h1>
      <Slider pictures={thisCard.pictures} />
    </>
  );
}
