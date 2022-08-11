// import { useEffect } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Rental from "./Rental";
import About from "./About";

// import logo from "./assets/LOGO.png";
// import "./App.css";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/locations/:rentalId" element={<Rental />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes> */}
      <Home />
    </>
  );
}

export default App;
