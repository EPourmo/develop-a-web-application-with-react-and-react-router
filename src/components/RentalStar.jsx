import "../styles/components/RentalStar.scss";
import StarSvg from "../components/icons/StarSvg";

export default function RentalStar({ rate }) {
  const ratingLength = 5;
  const activeStar = Array.apply(null, { length: rate }).map(
    (element, index) => {
      return <StarSvg className="star" fill="#FF6060" key={index} />;
    }
  );

  const inactiveStar = Array.apply(null, { length: ratingLength - rate }).map(
    (element, index) => {
      return <StarSvg className="star" fill="#E3E3E3" key={index} />;
    }
  );

  return (
    <div className="stars">
      {activeStar}
      {inactiveStar}
    </div>
  );
}
