import "../styles/components/RentalTitle.scss";

export default function RentalTitle({ title, location }) {
  return (
    <div className="rental__head">
      <p className="rental__title">{title}</p>
      <p className="rental__location">{location}</p>
    </div>
  );
}
