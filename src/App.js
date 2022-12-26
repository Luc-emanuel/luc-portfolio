//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ProjectsPage from "./pages/projects/ProjectsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/luc-portfolio/" element={<HomePage />} />
        <Route exact path="/luc-portfolio/sobre" element={<AboutPage />} />
        <Route
          exact
          path="/luc-portfolio/projetos"
          element={<ProjectsPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
