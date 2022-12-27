import "./index.css";
import React, { useState } from "react";
import { pages } from "../pages";
import { hookSize, updateHookSize } from "../../utils/functions";

const HomePage = () => {
  /*
  const [page, setPageNumber] = useState(
    localStorage.page ? Number(localStorage.page) : 1
  );
  //
  const setPage = (number) => {
    localStorage.setItem("page", number);
    setPageNumber(number);
  };
  const [size, setSize] = useState(hookSize());
  updateHookSize(setSize);
  //
  console.log(size);
  //
  
  const renderComponent = () => {
    let Component;
    let basenamePage;
    for (let index in pages) {
      if (pages[index].indice === page) {
        Component = pages[index].component;
        basenamePage = pages[index].basenamePage;
        break;
      }
    }
    return (
      <Component basenamePage={basenamePage} setPage={setPage} size={size} />
    );
  };*/
  //
  return (
    <div className="pageSetting">
      <span
        style={{
          color: "#ff9900",
          fontSize: "100px",
          margin: "0 auto",
        }}
      >
        {"TESTE"}
      </span>
    </div>
  );
};

export default HomePage;
