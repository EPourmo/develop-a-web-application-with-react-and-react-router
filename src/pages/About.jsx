import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Frame from "../components/Frame";
import "../styles/normalize.css";
import "../styles/pages/app.scss";
import Footer from "../components/Footer";
import aboutData from "../data/aboutData";
import Collapse from "../components/Collapse";
import "../styles/pages/About.scss";

export default function About() {
  const highlight = {
    home: false,
    about: true,
  };

  const aboutCollapes = aboutData.map((element, index) => {
    return (
      <div className="about__collapse" key={index}>
        <Collapse
          title={element.title}
          content={element.content}
          listOfElement={false}
        />
      </div>
    );
  });

  return (
    <div className="about">
      <Frame>
        <Navbar highlight={highlight} />
        <Banner homepage={false} />
        {aboutCollapes}
      </Frame>
      <Footer />
    </div>
  );
}
