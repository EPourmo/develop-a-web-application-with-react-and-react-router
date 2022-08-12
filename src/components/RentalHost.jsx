import "../styles/components/RentalHost.scss";

export default function RentalHost({ name, picture }) {
  const splitNmae = name.split(" ");
  return (
    <div className="host">
      <div className="host__name">
        <p>{splitNmae[0]}</p>
        <p>{splitNmae[1]}</p>
      </div>
      <div className="host__picture">
        <img src={picture} alt={name} />
      </div>
    </div>
  );
}
