import "./index.css";
import { MdArrowRight, MdTripOrigin } from "react-icons/md";

const CardsHistory = ({ pageName, title, array }) => {
  return (
    <div id={`${pageName}-section-mid-column`}>
      <div id={`${pageName}-column-line1`}>
        <span>{title}</span>
      </div>
      <div id={`${pageName}-column-line2`}>
        {array.map((item, index) => {
          return (
            <div key={`${pageName}-card-key-${index}`} id={`${pageName}-card`}>
              <div
                style={
                  index === array.length - 1 ? { marginBottom: "0px" } : {}
                }
                id={`${pageName}-card-card`}
              >
                <div id={`${pageName}-card-box`}>
                  <div id={`${pageName}-card-title`}>
                    <span id={`${pageName}-card-title-title`}>
                      {item.title}
                    </span>
                    <span id={`${pageName}-card-title-subtitle`}>
                      {item.subtitle}
                    </span>
                    <span id={`${pageName}-card-title-date`}>{item.date}</span>
                  </div>
                  <div id={`${pageName}-card-desc`}>
                    {item.points.map((itemPoints, indexPoint) => {
                      return (
                        <div
                          style={indexPoint === 0 ? { marginTop: "5px" } : {}}
                          key={`${pageName}-card-key-item-${indexPoint}`}
                          id={`${pageName}-desc-item`}
                        >
                          <MdArrowRight />
                          <span>{itemPoints}</span>
                        </div>
                      );
                    })}
                  </div>
                  {item.techs && (
                    <div id={`${pageName}-card-tech`}>
                      <div id={`${pageName}-card-tech-line`}>
                        {item.techs.map((itemTech, indexTech) => {
                          return (
                            <div
                              key={`${pageName}-card-key-tech-item-${indexTech}`}
                              id={`${pageName}-tech-item`}
                            >
                              <span>{itemTech}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div id={`${pageName}-card-line`}>
                <div
                  id={`${pageName}-card-line-line`}
                  style={index === 0 ? { marginTop: "18px" } : {}}
                >
                  <MdTripOrigin style={index === 0 ? { top: "-1px" } : {}} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardsHistory;
