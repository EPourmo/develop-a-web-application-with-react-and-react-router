import "../styles/components/Banner.scss";

export default function Banner({ homepage }) {
  return (
    <div className={homepage ? "banner banner--home" : "banner banner--about"}>
      <div
        className={
          homepage
            ? "banner__blend banner__blend--home"
            : "banner__blend banner__blend--about"
        }
      ></div>
      {homepage && (
        <p className="banner__title">Chez vous, partout et ailleurs</p>
      )}
    </div>
  );
}
