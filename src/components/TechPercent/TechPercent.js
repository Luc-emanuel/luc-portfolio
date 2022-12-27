//
import React from "react";

const TechPercent = ({ idname, tech, percent }) => {
  return (
    <div id={idname}>
      <div id={`${idname}-title`}>
        <div>
          <span id={`${idname}-title-tech`}>{tech}</span>
          <span id={`${idname}-title-percent`}>{`${percent} %`}</span>
        </div>
      </div>
      <div id={`${idname}-bar`}>
        <div
          id={`${idname}-bar-color`}
          style={{
            width: `${percent}%`,
            height: "100%",
            backgroundColor: "#ff9900",
          }}
        ></div>
      </div>
    </div>
  );
};

export default TechPercent;
