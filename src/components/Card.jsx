import "../styles/components/Card.scss";

export default function Card(props) {
  const { image, title } = props;
  const style = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className="card">
      <div className="card__background" style={style}></div>
      <p className="card__title">{title}</p>
    </div>
  );
}
