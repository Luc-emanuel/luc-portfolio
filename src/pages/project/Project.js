import { useEffect, useState } from "react";
import "./index.css";
import { MdPause, MdPlayArrow } from "react-icons/md";

const Project = ({ basenamePage, setPage, size, open, animate, project }) => {
  const [imageIndex, setIndex] = useState(0);
  const [side, setSide] = useState(0);
  const [full, setFull] = useState(false);
  //
  const handleFull = () => {
    setFull(!full);
  };
  //
  const handleImage = (index) => {
    if (index === 0) {
      if (imageIndex > 0) {
        setIndex(imageIndex - 1);
      } else {
        setSide(0);
      }
    }
    if (index === 1) {
      if (imageIndex < project.imgs.length - 1) {
        setIndex(imageIndex + 1);
      } else {
        setSide(1);
      }
    }
  };
  //
  useEffect(() => {
    const timer = setInterval(() => {
      if (!full) {
        if (side === 0) {
          handleImage(1);
        }
        if (side === 1) {
          handleImage(0);
        }
      }
    }, 3000);
    return () => clearInterval(timer);
  });
  //
  if (size === "xs" || size === "sm" || size === "md") {
    return (
      <div
        style={{
          display: animate ? "none" : "flex",
        }}
        id={`v-${basenamePage}-section-mid`}
      >
        <div id={`v-${basenamePage}-section-mid-top`}>
          <div id={`v-${basenamePage}-section-mid-top-box`}>
            <div id={`v-${basenamePage}-top-line1`}>
              <div id={`v-${basenamePage}-top-line1-titles`}>
                <span id={`v-${basenamePage}-top-title`}>{project.title}</span>
                <span id={`v-${basenamePage}-top-subtitle`}>
                  {project.subtitle}
                </span>
              </div>
            </div>
            <div id={`v-${basenamePage}-top-line2`}>
              <div id={`v-${basenamePage}-top-line2-carousel-section`}>
                <div id={`v-${basenamePage}-item-image`}>
                  {project.imgs.map((item, index) => {
                    return (
                      <div
                        style={
                          index === imageIndex
                            ? { opacity: "1", zIndex: "5" }
                            : { opacity: "0", zIndex: "1" }
                        }
                        key={`v-${basenamePage}-key-image-${index}`}
                      >
                        <MdPlayArrow
                          style={
                            full
                              ? { opacity: "1", zIndex: "15" }
                              : { opacity: "0", zIndex: "14" }
                          }
                          onClick={() => {
                            handleFull();
                          }}
                        />
                        <MdPause
                          style={
                            full
                              ? { opacity: "0", zIndex: "14" }
                              : { opacity: "1", zIndex: "15" }
                          }
                          onClick={() => {
                            handleFull();
                          }}
                        />
                        <img
                          onClick={() => {
                            window.open(item, "_blank");
                          }}
                          draggable="false"
                          src={item}
                          alt={`images project ${index}`}
                          style={{
                            width: `${window.innerWidth * 0.914}px`,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
                <span
                  id={`v-${basenamePage}-count-images`}
                  style={{
                    top: `${(window.innerWidth * 0.914) / (1920 / 1039)}px`,
                  }}
                >{`${imageIndex + 1}/${project.imgs.length}`}</span>
              </div>
            </div>
          </div>
        </div>
        <div id={`v-${basenamePage}-section-mid-mid`}>
          <div id={`v-${basenamePage}-section-mid-mid-box`}>
            <div id={`v-${basenamePage}-mid-line1`}>
              <span>{"Detalhes do projeto"}</span>
            </div>
            <div id={`v-${basenamePage}-mid-line2`}>
              <div id={`v-${basenamePage}-mid-line2-card1`}>
                <div
                  style={
                    size === "lg" || size === "lx" ? { margin: "20px" } : {}
                  }
                  id={`v-${basenamePage}-mid-line2-card1-box`}
                >
                  <span id={`v-${basenamePage}-mid-line2-card1-title`}>
                    {"Descrição"}
                  </span>
                  <span
                    style={
                      size === "lg" || size === "lx"
                        ? { lineHeight: "16px", fontSize: "11px" }
                        : {}
                    }
                    id={`v-${basenamePage}-mid-line2-card1-desc`}
                  >
                    {project.desc}
                  </span>
                  <span id={`v-${basenamePage}-mid-line2-card1-tech`}>
                    {"Tecnologias"}
                  </span>
                  <div id={`v-${basenamePage}-mid-line2-card1-techs`}>
                    {project.technologies.map((item, index) => {
                      return (
                        <span
                          key={`v-${basenamePage}-card1-techs-key-${index}`}
                          id={`v-${basenamePage}-mid-line2-card1-techs-item`}
                        >
                          {item}
                        </span>
                      );
                    })}
                  </div>
                  <span
                    style={{ width: `${project.url.length * 6.2}px` }}
                    onClick={() => {
                      window.open(project.url, "_blank");
                    }}
                    id={`v-${basenamePage}-mid-line2-card1-link`}
                  >
                    {project.url}
                  </span>
                </div>
              </div>
              <div id={`v-${basenamePage}-mid-line2-card2`}>
                <div
                  style={
                    size === "lg" || size === "lx" ? { margin: "20px" } : {}
                  }
                  id={`v-${basenamePage}-mid-line2-card2-box`}
                >
                  {project.details.map((item, index) => {
                    return (
                      <div
                        key={`v-${basenamePage}-mid-items-key-${index}`}
                        id={`v-${basenamePage}-card2-line`}
                      >
                        <span id={`v-${basenamePage}-card2-line-title`}>
                          {`${item.title}:`}
                        </span>
                        <span id={`v-${basenamePage}-card2-line-value`}>
                          {item.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id={`v-${basenamePage}-section-mid-bot`}>
          <div id={`v-${basenamePage}-section-mid-bot-box`}>
            <div id={`v-${basenamePage}-section-mid-bot-text`}>
              <span>{"© 2022 Lucas Ribeiro"}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: animate ? "none" : "flex",
        }}
        id={`${basenamePage}-section-mid`}
      >
        <div id={`${basenamePage}-section-mid-top`}>
          <div id={`${basenamePage}-section-mid-top-box`}>
            <div id={`${basenamePage}-top-line1`}>
              <div id={`${basenamePage}-top-line1-titles`}>
                <span id={`${basenamePage}-top-title`}>{project.title}</span>
                <span id={`${basenamePage}-top-subtitle`}>
                  {project.subtitle}
                </span>
              </div>
            </div>
            <div id={`${basenamePage}-top-line2`}>
              <div id={`${basenamePage}-top-line2-carousel-section`}>
                <div id={`${basenamePage}-item-image`}>
                  {project.imgs.map((item, index) => {
                    return (
                      <div
                        style={
                          index === imageIndex
                            ? { opacity: "1", zIndex: "5" }
                            : { opacity: "0", zIndex: "1" }
                        }
                        key={`${basenamePage}-key-image-${index}`}
                      >
                        <MdPlayArrow
                          style={
                            full
                              ? { opacity: "1", zIndex: "15" }
                              : { opacity: "0", zIndex: "14" }
                          }
                          onClick={() => {
                            handleFull();
                          }}
                        />
                        <MdPause
                          style={
                            full
                              ? { opacity: "0", zIndex: "14" }
                              : { opacity: "1", zIndex: "15" }
                          }
                          onClick={() => {
                            handleFull();
                          }}
                        />
                        <img
                          onClick={() => {
                            window.open(item, "_blank");
                          }}
                          draggable="false"
                          src={item}
                          alt={`images project ${index}`}
                        />
                      </div>
                    );
                  })}
                </div>
                <span id={`${basenamePage}-count-images`}>{`${imageIndex + 1}/${
                  project.imgs.length
                }`}</span>
              </div>
            </div>
          </div>
        </div>
        <div id={`${basenamePage}-section-mid-mid`}>
          <div id={`${basenamePage}-section-mid-mid-box`}>
            <div id={`${basenamePage}-mid-line1`}>
              <span>{"Detalhes do projeto"}</span>
            </div>
            <div id={`${basenamePage}-mid-line2`}>
              <div id={`${basenamePage}-mid-line2-card1`}>
                <div
                  style={
                    size === "lg" || size === "lx" ? { margin: "20px" } : {}
                  }
                  id={`${basenamePage}-mid-line2-card1-box`}
                >
                  <span id={`${basenamePage}-mid-line2-card1-title`}>
                    {"Descrição"}
                  </span>
                  <span
                    style={
                      size === "lg" || size === "lx"
                        ? { lineHeight: "16px", fontSize: "11px" }
                        : {}
                    }
                    id={`${basenamePage}-mid-line2-card1-desc`}
                  >
                    {project.desc}
                  </span>
                  <span id={`${basenamePage}-mid-line2-card1-tech`}>
                    {"Tecnologias"}
                  </span>
                  <div id={`${basenamePage}-mid-line2-card1-techs`}>
                    {project.technologies.map((item, index) => {
                      return (
                        <span
                          key={`${basenamePage}-card1-techs-key-${index}`}
                          id={`${basenamePage}-mid-line2-card1-techs-item`}
                        >
                          {item}
                        </span>
                      );
                    })}
                  </div>
                  <span
                    style={{ width: `${project.url.length * 6.2}px` }}
                    onClick={() => {
                      window.open(project.url, "_blank");
                    }}
                    id={`${basenamePage}-mid-line2-card1-link`}
                  >
                    {project.url}
                  </span>
                </div>
              </div>
              <div id={`${basenamePage}-mid-line2-card2`}>
                <div
                  style={
                    size === "lg" || size === "lx" ? { margin: "20px" } : {}
                  }
                  id={`${basenamePage}-mid-line2-card2-box`}
                >
                  {project.details.map((item, index) => {
                    return (
                      <div
                        key={`${basenamePage}-mid-items-key-${index}`}
                        id={`${basenamePage}-card2-line`}
                      >
                        <span id={`${basenamePage}-card2-line-title`}>
                          {`${item.title}:`}
                        </span>
                        <span id={`${basenamePage}-card2-line-value`}>
                          {item.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id={`${basenamePage}-section-mid-bot`}>
          <div id={`${basenamePage}-section-mid-bot-box`}>
            <div id={`${basenamePage}-section-mid-bot-text`}>
              <span>{"© 2022 Lucas Ribeiro"}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Project;
