import React from "react";
import "./index.css";
import AnimationText from "../AnimationText/AnimationText";
import imageBackground from "../../assets/images/amazing_panoramic.jpg";
import { home } from "../../utils/constants";

const Informations = ({ basename, setPage, size, open }) => {
  //
  return (
    <div id={`${basename}-section-mid`}>
      <div id={`${basename}-section-mid-top`}>
        <div
          id={`${basename}-section-mid-box`}
          style={{
            background: `url(${imageBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div id={`${basename}-section-mid-box-center`}>
            <div id={`${basename}-section-mid-box-center-title`}>
              <span>{"Descubra minha Incrível"}</span>
              <span>{"Área de Trabalho!"}</span>
            </div>
            <div id={`${basename}-section-mid-text`}>
              <span id={`${basename}-section-mid-text-c-seta`}>
                {"<"}
                <span id={`${basename}-section-mid-text-c`}>{"code"}</span>
                {">"}
              </span>
              <span id={`${basename}-section-mid-text-s`}>
                <AnimationText
                  stringsArray={[
                    "Eu faço tudo com Python.",
                    "Eu faço JavaScript games.",
                    "Eu faço RESP APIs.",
                    "Eu faço Websites.",
                    "Eu faço Mobile Apps.",
                  ]}
                  backgroundString={8}
                  interval={140}
                  stopTime={1500}
                />
              </span>
              <span id={`${basename}-section-mid-text-c-seta`}>
                {"</"}
                <span id={`${basename}-section-mid-text-c`}>{"code"}</span>
                {">"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id={`${basename}-section-mid-mid`}>
        <div id={`${basename}-section-mid-mid-box`}>
          <div id={`${basename}-section-mid-mid-line1`}>
            {home.stats.map((item, index) => {
              return (
                <div
                  key={`${basename}-key-${index}`}
                  id={`${basename}-section-mid-mid-line1-items`}
                >
                  <div id={`${basename}-section-mid-mid-line1-items-text`}>
                    <span
                      id={`${basename}-section-mid-mid-line1-items-text-value`}
                    >
                      {item.value}
                    </span>
                    <span
                      id={`${basename}-section-mid-mid-line1-items-text-title`}
                    >
                      {item.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div id={`${basename}-section-mid-mid-line2`}>
            <div id={`${basename}-section-mid-mid-line2-title`}>
              <span id={`${basename}-section-mid-mid-line2-title-span`}>
                {"Minhas habilidades"}
              </span>
            </div>
            <div
              id={`${basename}-section-mid-mid-line2-cards`}
              style={
                size === "xl" ? {} : size === "lg" ? { maxHeight: "300px" } : {}
              }
            >
              {home.skills.map((item, index) => {
                return (
                  <div
                    key={`${basename}-skill-card-key-${index}`}
                    id={`${basename}-section-mid-mid-line2-cards-item`}
                  >
                    <div id={`${basename}-skill-card-title`}>
                      <span>{item.title}</span>
                    </div>
                    <div id={`${basename}-skill-card-desc`}>
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
      <div id={`${basename}-section-mid-bot`}>
        <div id={`${basename}-section-mid-bot-box`}>
          <div id={`${basename}-section-mid-bot-text`}>
            <span>{"© 2022 Lucas Ribeiro"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informations;
