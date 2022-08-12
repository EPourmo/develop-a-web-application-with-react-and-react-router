import "../styles/components/RentalTag.scss";

export default function RentalTag({ tags }) {
  const tagsHtml = tags.map((tag, index) => (
    <div className="tag" key={index}>
      {tag}
    </div>
  ));
  return <div className="tags">{tagsHtml}</div>;
}
