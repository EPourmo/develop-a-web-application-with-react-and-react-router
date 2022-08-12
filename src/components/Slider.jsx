import { useState } from "react";
import ArrowSvg from "./icons/ArrowSvg";
import "../styles/components/Slider.scss";

export default function Slider({ pictures }) {
  const [current, setCurrent] = useState(0);
  const tabLength = pictures.length;

  const nextSlide = () => {
    setCurrent(current === tabLength - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? tabLength - 1 : current - 1);
  };

  const imgShown = pictures.map((pic, index) => {
    return (
      <div
        className={index === current ? "slide active" : "slide desactive"}
        key={index}
      >
        {index === current && (
          <img src={pic} alt="rental" className="slider__img" />
        )}
      </div>
    );
  });

  return (
    <section className="slider">
      <p className="slider__page">{`${current + 1}/${tabLength}`}</p>
      {tabLength > 2 && (
        <ArrowSvg
          className="slider__arrow next"
          onClick={nextSlide}
          transform="rotate(180)"
        />
      )}
      {tabLength > 2 && (
        <ArrowSvg className="slider__arrow prev" onClick={prevSlide} />
      )}
      {imgShown}
    </section>
  );
}
