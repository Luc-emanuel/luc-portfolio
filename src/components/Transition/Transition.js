import { useEffect, useState } from "react";
import "./index.css";

const Transition = ({ basenamePage, animate }) => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (animate) {
        let sum = 0;
        sum += percent;
        if (sum < 100) {
          setPercent((sum += 2));
        }
      } else {
        setPercent(0);
      }
    }, 10);
    return () => clearInterval(timer);
  });
  return (
    <div
      style={{
        display: animate ? "flex" : "none",
      }}
      id={`${basenamePage}-section-mid`}
    >
      <div id={`${basenamePage}-section-mid-mid`}>
        <div id={`${basenamePage}-section-mid-bar-title`}>
          <span id={`${basenamePage}-section-mid-bar-title-style`}>
            {`${percent} %`}
          </span>
        </div>
        <div id={`${basenamePage}-section-mid-bar`}>
          <div
            style={{
              width: `${percent}%`,
            }}
            id={`${basenamePage}-section-mid-bar-color`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Transition;
