import "../styles/components/Wrapper.scss";

export default function Wrapper(props) {
  return <div className="portfolio">{props.children}</div>;
}
