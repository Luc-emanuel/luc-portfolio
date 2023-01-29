import "./index.css";
import { home } from "../../utils/constants";
import { SocialIcon } from "react-social-icons";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React, { useEffect, useState } from "react";
import TechPercent from "../../components/TechPercent/TechPercent";
import { MdDownload } from "react-icons/md";
import { idade } from "../../utils/functions";

const Profile = ({ basenamePage, setPage, size }) => {
  const [state, setState] = useState({
    percents: [0, 0, 0, 0],
    language: [0, 0, 0],
  });
  const [init] = useState(new Date());
  const [load, setLoad] = useState(false);
  //
  useEffect(() => {
    const rand = () => {
      let newArray = [],
        newArray2 = [];
      for (let i = 0; i < 4; i++) {
        let value = Math.floor(Math.random() * 100);
        newArray.push(value);
      }
      for (let p = 0; p < 3; p++) {
        let valuep = Math.floor(Math.random() * 100) / 100;
        newArray2.push(valuep);
      }
      //
      setState({ ...state, percents: newArray, language: newArray2 });
      let now = new Date();
      let diff = now - init;
      if (diff >= 1000) {
        setLoad(true);
        setState({
          ...state,
          percents: [80, 90, 68, 62],
          language: [1, 0.45, 0.25],
        });
      }
    };
    if (!load) {
      let numberTime = Math.floor(Math.random() * 251) + 50;
      const timer = setInterval(() => {
        rand();
      }, numberTime);
      return () => clearInterval(timer);
    }
  });
  //
  return (
    <div id={`${basenamePage}-section-left`}>
      <div id={`${basenamePage}-section-left-top`}>
        <div id={`${basenamePage}-section-left-top-image`}>
          <img
            draggable="false"
            src={home.image}
            id="image"
            alt={"minha foto"}
          />
        </div>
        <div id={`${basenamePage}-section-left-top-desc`}>
          <span
            onClick={() => {
              setPage(1);
            }}
            id={`${basenamePage}-name`}
          >
            {home.name}
          </span>
          <span id={`${basenamePage}-oficio`}>{home.oficio}</span>
          <span id={`${basenamePage}-study`}>{home.study}</span>
        </div>
      </div>
      <div id={`${basenamePage}-section-left-mid`}>
        <div id={`${basenamePage}-section-left-mid-sec1`}>
          <div id={`${basenamePage}-section-left-mid-sec1-row`}>
            <span id={`${basenamePage}-section-left-mid-sec1-row-title`}>
              {"País:"}
            </span>
            <span id={`${basenamePage}-section-left-mid-sec1-row-value`}>
              {home.pais}
            </span>
          </div>
          <div id={`${basenamePage}-section-left-mid-sec1-row`}>
            <span id={`${basenamePage}-section-left-mid-sec1-row-title`}>
              {"Cidade:"}
            </span>
            <span id={`${basenamePage}-section-left-mid-sec1-row-value`}>
              {home.city}
            </span>
          </div>
          <div id={`${basenamePage}-section-left-mid-sec1-row`}>
            <span id={`${basenamePage}-section-left-mid-sec1-row-title`}>
              {"Idade:"}
            </span>
            <span id={`${basenamePage}-section-left-mid-sec1-row-value`}>
              {idade(home.age.split("-"))}
            </span>
          </div>
        </div>
        <div id={`${basenamePage}-section-left-mid-sec2`}>
          <div id={`${basenamePage}-section-left-mid-sec2-row`}>
            <div id={`${basenamePage}-bar-progress-circle`}>
              <CircularProgressbar
                value={state.language[0]}
                maxValue={1}
                text={`${Math.round(state.language[0] * 100)}%`}
                strokeWidth={7}
                styles={{
                  path: {
                    stroke: "#ff9900",
                  },
                  trail: {
                    stroke: "#444",
                  },
                  text: {
                    fill: "#999",
                    fontSize: "20px",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    letterSpacing: "1px",
                  },
                }}
              />
              <span>{"Português"}</span>
            </div>
            <div id={`${basenamePage}-bar-progress-circle`}>
              <CircularProgressbar
                value={state.language[1]}
                maxValue={1}
                text={`${Math.round(state.language[1] * 100)}%`}
                strokeWidth={7}
                styles={{
                  path: {
                    stroke: "#ff9900",
                  },
                  trail: {
                    stroke: "#444",
                  },
                  text: {
                    fill: "#999",
                    fontSize: "20px",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    letterSpacing: "1px",
                  },
                }}
              />
              <span>{"English"}</span>
            </div>
            <div id={`${basenamePage}-bar-progress-circle`}>
              <CircularProgressbar
                value={state.language[2]}
                maxValue={1}
                text={`${Math.round(state.language[2] * 100)}%`}
                strokeWidth={7}
                styles={{
                  path: {
                    stroke: "#ff9900",
                  },
                  trail: {
                    stroke: "#444",
                  },
                  text: {
                    fill: "#999",
                    fontSize: "20px",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    letterSpacing: "1px",
                  },
                }}
              />
              <span>{"Español"}</span>
            </div>
          </div>
        </div>
        <div id={`${basenamePage}-section-left-mid-sec3`}>
          <TechPercent
            idname={`${basenamePage}-section-left-mid-sec3-row`}
            tech={"JavaScript"}
            percent={state.percents[0]}
          />
          <TechPercent
            idname={`${basenamePage}-section-left-mid-sec3-row`}
            tech={"Python"}
            percent={state.percents[1]}
          />
          <TechPercent
            idname={`${basenamePage}-section-left-mid-sec3-row`}
            tech={"AWS"}
            percent={state.percents[2]}
          />
          <TechPercent
            idname={`${basenamePage}-section-left-mid-sec3-row`}
            tech={"Automação"}
            percent={state.percents[3]}
          />
        </div>
        <div id={`${basenamePage}-section-left-mid-sec4`}>
          <div id={`${basenamePage}-section-left-mid-sec4-button`}>
            <a
              id={`${basenamePage}-button-download`}
              href={home.cv}
              download="lucas-curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{"DOWNLOAD CV"}</span>
              <MdDownload id={`${basenamePage}-button-download-icon`} />
            </a>
          </div>
        </div>
      </div>
      <div id={`${basenamePage}-section-left-bot`}>
        <div id={`${basenamePage}-section-left-bot-items`}>
          {home.socials.length > 0 &&
            home.socials.map((item, index) => {
              return (
                <SocialIcon
                  className={`${basenamePage}-section-left-bot-items-icon`}
                  key={`social-media-${index}`}
                  url={item}
                  target="_blank"
                  rel="noopener noreferrer"
                  bgColor="#ff9900"
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
