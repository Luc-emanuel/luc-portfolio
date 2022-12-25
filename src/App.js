//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ProjectsPage from "./pages/projects/ProjectsPage";

const App = () => {
  return (
    <Router basename="/luc-portfolio">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/sobre" element={<AboutPage />} />
        <Route exact path="/projetos" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
