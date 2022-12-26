//
import "./index.css";
import { dataCards } from "../../../utils/constants";
import { SocialIcon } from "react-social-icons";
import { styleFonts } from "./style";

const CardHome = ({ id, size }) => {
  const data = { ...dataCards[id] };
  return (
    <div className="card">
      <div id="top"></div>
      <div id="mid-image">
        <img draggable="false" src={data.image} id="image" alt={"minha foto"} />
      </div>
      <div id="mid-desc">
        <div id="name">
          <span id="title-name">{data.name}</span>
        </div>
        <div id="oficio">
          <span id="title-oficio">{data.oficio}</span>
        </div>
        <div id="frase">
          <span id="title-frase">{data.frase}</span>
        </div>
        <div id="socials">
          <div style={{ width: `${data.socials.length * 60}px` }}>
            {data.socials.length > 0 &&
              data.socials.map((item, index) => {
                return (
                  <SocialIcon
                    key={`social-media-${index}`}
                    url={item}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div id="bot">
        <div
          id="rodape1"
          onClick={() => {
            window.location.href = "/luc-portfolio/sobre";
          }}
        >
          <span style={styleFonts["bot"][size]}>{data.rodape1}</span>
        </div>
        <div
          id="rodape2"
          onClick={() => {
            window.location.href = "/luc-portfolio/projetos";
          }}
        >
          <span style={styleFonts["bot"][size]}>{data.rodape2}</span>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
