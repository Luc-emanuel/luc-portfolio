//
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import { getIP } from "./utils/functions";

const App = () => {
  //
  useEffect(() => {
    getIP();
  }, []);
  //
  return (
    <Router basename="/luc-portfolio">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
