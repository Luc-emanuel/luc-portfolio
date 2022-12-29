import "./index.css";
import { infoHistory } from "../../utils/constants";
import CardsHistory from "../../components/CardsHistory/CardsHistory";

const History = ({ basenamePage, setPage, size, open, animate }) => {
  return (
    <div
      style={{
        display: animate ? "none" : "flex",
      }}
      id={`${basenamePage}-section-mid`}
    >
      <div id={`${basenamePage}-section-mid-top`}>
        <div id={`${basenamePage}-section-mid-top-box`}>
          <CardsHistory
            pageName={basenamePage}
            title="Educação"
            array={infoHistory.education}
          />
          <CardsHistory
            pageName={basenamePage}
            title="Trabalhos"
            array={infoHistory.work}
          />
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
};

export default History;
