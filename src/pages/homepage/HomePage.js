import "./index.css";
import CardHome from "../../components/Cards/CardHome/CardHome";
import { hookSize } from "../../utils/functions";
import AboutPage from "../about/AboutPage";
import ProjectsPage from "../projects/ProjectsPage";
import { useState } from "react";

const HomePage = () => {
  const [page, setPageNumber] = useState(
    localStorage.page ? Number(localStorage.page) : 0
  );
  //
  const setPage = (number) => {
    localStorage.setItem("page", number);
    setPageNumber(number);
  };
  //
  const size = hookSize();
  return (
    <div className="pageSetting notSelect">
      {page === 0 ? (
        <div className="mid">
          <CardHome id="person" size={size} setPage={setPage} />
        </div>
      ) : page === 1 ? (
        <AboutPage setPage={setPage} />
      ) : (
        <ProjectsPage setPage={setPage} />
      )}
    </div>
  );
};

export default HomePage;
