import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import Home from "./pages/Home";
import About from "./pages/About";
import Rental from "./pages/Rental";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/rentals/:rentalId" element={<Rental />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
