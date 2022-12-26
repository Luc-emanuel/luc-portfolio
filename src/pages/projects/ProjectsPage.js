import "./index.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { MdArrowBack } from "react-icons/md";
import "react-perfect-scrollbar/dist/css/styles.css";

import { projects } from "../../utils/constants";

const ProjectsPage = () => {
  return (
    <div className="projectsSetting notSelect">
      <div id="project-top">
        <div id="project-top-title">
          <span>{"Projetos"}</span>
        </div>
        <div id="project-top-button">
          <div id="project-top-buttons">
            <MdArrowBack
              id="return-button"
              onClick={() => {
                window.location.href = "/luc-portfolio";
              }}
            />
            <span>{projects.length}</span>
          </div>
        </div>
      </div>
      <div id="project-mid">
        <PerfectScrollbar>
          <div id="project-cards">
            {projects.map((item, index) => {
              return (
                <div key={"project-" + index} id="project-card">
                  <div
                    style={{ backgroundColor: item.back }}
                    id="project-card-icon"
                    onClick={() => {
                      window.open(item.url, "_blank");
                    }}
                  >
                    <img
                      draggable="false"
                      src={item.image}
                      id="project-icon"
                      alt={"icone projeto"}
                    />
                  </div>
                  <div id="project-card-title">
                    <span id="project-name">{item.name}</span>
                    <span id="project-desc">{item.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </PerfectScrollbar>
      </div>
      <div id="project-bot"></div>
    </div>
  );
};

export default ProjectsPage;
