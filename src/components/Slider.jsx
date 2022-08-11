import { useState } from "react";

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
      <div className={index === current ? "slide active" : "slide"} key={index}>
        {index === current && (
          <img src={pic} alt="rental" className="picture" />
        )}
      </div>
    );
  });

  return (
    <section>
      <p>{tabLength}</p>
      <div className="next-arrow" onClick={nextSlide}>
        NEXT
      </div>
      <div className="prev-arrow" onClick={prevSlide}>
        PREV
      </div>
      {imgShown}
    </section>
  );
}
