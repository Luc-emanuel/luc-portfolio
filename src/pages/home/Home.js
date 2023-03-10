import React from "react";
import "./index.css";
import AnimationText from "../../components/AnimationText/AnimationText";
import imageBackground from "../../assets/images/amazing_panoramic.jpg";
import { home } from "../../utils/constants";
import { anos } from "../../utils/functions";

const Home = ({ basenamePage, setPage, size, open, animate }) => {
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
          <div
            id={`v-${basenamePage}-section-mid-box`}
            style={{
              background: `url(${imageBackground})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div id={`v-${basenamePage}-section-mid-box-center`}>
              <div id={`v-${basenamePage}-section-mid-box-center-title`}>
                <span>{"Descubra minha Incrível"}</span>
                <span>{"Área de Trabalho!"}</span>
              </div>
              <div id={`v-${basenamePage}-section-mid-text`}>
                <span id={`v-${basenamePage}-section-mid-text-c-seta`}>
                  {"<"}
                  <span id={`v-${basenamePage}-section-mid-text-c`}>
                    {"code"}
                  </span>
                  {">"}
                </span>
                <span id={`v-${basenamePage}-section-mid-text-s`}>
                  <AnimationText
                    stringsArray={[
                      "Python",
                      "JavaScript",
                      "Games",
                      "APIs",
                      "Websites",
                      "Mobile Apps",
                    ]}
                    backgroundString={0}
                    interval={140}
                    stopTime={1500}
                  />
                </span>
                <span id={`v-${basenamePage}-section-mid-text-c-seta`}>
                  {"</"}
                  <span id={`v-${basenamePage}-section-mid-text-c`}>
                    {"code"}
                  </span>
                  {">"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id={`v-${basenamePage}-section-mid-mid`}>
          <div id={`v-${basenamePage}-section-mid-mid-box`}>
            <div id={`v-${basenamePage}-section-mid-mid-line1`}>
              {home.stats.map((item, index) => {
                return (
                  <div
                    key={`v-${basenamePage}-key-${index}`}
                    id={`v-${basenamePage}-section-mid-mid-line1-items`}
                  >
                    <div
                      id={`v-${basenamePage}-section-mid-mid-line1-items-text`}
                    >
                      <span
                        id={`v-${basenamePage}-section-mid-mid-line1-items-text-value`}
                      >
                        {index === 0 ? anos(item.value) : item.value}
                      </span>
                      <span
                        id={`v-${basenamePage}-section-mid-mid-line1-items-text-title`}
                      >
                        {item.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div id={`v-${basenamePage}-section-mid-mid-line2`}>
              <div id={`v-${basenamePage}-section-mid-mid-line2-title`}>
                <span id={`v-${basenamePage}-section-mid-mid-line2-title-span`}>
                  {"Minhas habilidades"}
                </span>
              </div>
              <div id={`v-${basenamePage}-section-mid-mid-line2-cards`}>
                {home.skills.map((item, index) => {
                  return (
                    <div
                      key={`v-${basenamePage}-skill-card-key-${index}`}
                      id={`v-${basenamePage}-section-mid-mid-line2-cards-item`}
                      style={
                        index < home.skills.length - 1
                          ? { marginBottom: "20px" }
                          : {}
                      }
                    >
                      <div id={`v-${basenamePage}-skill-card-title`}>
                        <span>{item.title}</span>
                      </div>
                      <div id={`v-${basenamePage}-skill-card-desc`}>
                        <span>{item.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div id={`v-${basenamePage}-section-mid-bot`}>
          <div id={`v-${basenamePage}-section-mid-bot-box`}>
            <div id={`v-${basenamePage}-section-mid-bot-text`}>
              <span>{"© 2022 Lucas Emanuel"}</span>
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
          <div
            id={`${basenamePage}-section-mid-box`}
            style={{
              background: `url(${imageBackground})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div id={`${basenamePage}-section-mid-box-center`}>
              <div id={`${basenamePage}-section-mid-box-center-title`}>
                <span>{"Descubra minha Incrível"}</span>
                <span>{"Área de Trabalho!"}</span>
              </div>
              <div id={`${basenamePage}-section-mid-text`}>
                <span id={`${basenamePage}-section-mid-text-c-seta`}>
                  {"<"}
                  <span id={`${basenamePage}-section-mid-text-c`}>
                    {"code"}
                  </span>
                  {">"}
                </span>
                <span id={`${basenamePage}-section-mid-text-s`}>
                  <AnimationText
                    stringsArray={[
                      "Python",
                      "JavaScript",
                      "Games",
                      "APIs",
                      "Websites",
                      "Mobile Apps",
                    ]}
                    backgroundString={0}
                    interval={140}
                    stopTime={1500}
                  />
                </span>
                <span id={`${basenamePage}-section-mid-text-c-seta`}>
                  {"</"}
                  <span id={`${basenamePage}-section-mid-text-c`}>
                    {"code"}
                  </span>
                  {">"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id={`${basenamePage}-section-mid-mid`}>
          <div id={`${basenamePage}-section-mid-mid-box`}>
            <div id={`${basenamePage}-section-mid-mid-line1`}>
              {home.stats.map((item, index) => {
                return (
                  <div
                    key={`${basenamePage}-key-${index}`}
                    id={`${basenamePage}-section-mid-mid-line1-items`}
                  >
                    <div
                      id={`${basenamePage}-section-mid-mid-line1-items-text`}
                    >
                      <span
                        id={`${basenamePage}-section-mid-mid-line1-items-text-value`}
                      >
                        {index === 0 ? anos(item.value) : item.value}
                      </span>
                      <span
                        id={`${basenamePage}-section-mid-mid-line1-items-text-title`}
                      >
                        {item.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div id={`${basenamePage}-section-mid-mid-line2`}>
              <div id={`${basenamePage}-section-mid-mid-line2-title`}>
                <span id={`${basenamePage}-section-mid-mid-line2-title-span`}>
                  {"Minhas habilidades"}
                </span>
              </div>
              <div
                id={`${basenamePage}-section-mid-mid-line2-cards`}
                style={
                  size === "xl"
                    ? {}
                    : size === "lg"
                    ? { maxHeight: "300px" }
                    : {}
                }
              >
                {home.skills.map((item, index) => {
                  return (
                    <div
                      key={`${basenamePage}-skill-card-key-${index}`}
                      id={`${basenamePage}-section-mid-mid-line2-cards-item`}
                    >
                      <div id={`${basenamePage}-skill-card-title`}>
                        <span>{item.title}</span>
                      </div>
                      <div id={`${basenamePage}-skill-card-desc`}>
                        <span
                          style={
                            size === "xl"
                              ? {}
                              : size === "lg"
                              ? open
                                ? {
                                    fontSize: "11px",
                                    lineHeight: "14px",
                                  }
                                : {
                                    fontSize: "11px",
                                    lineHeight: "16px",
                                  }
                              : {}
                          }
                        >
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div id={`${basenamePage}-section-mid-bot`}>
          <div id={`${basenamePage}-section-mid-bot-box`}>
            <div id={`${basenamePage}-section-mid-bot-text`}>
              <span>{"© 2022 Lucas Emanuel"}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
