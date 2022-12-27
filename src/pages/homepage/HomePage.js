import "./index.css";
import { useState } from "react";
import { pages } from "../pages";
import { hookSize, updateHookSize } from "../../utils/functions";

const HomePage = () => {
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
  const renderComponent = () => {
    let Component;
    let basename;
    for (let index in pages) {
      if (pages[index].indice === page) {
        Component = pages[index].component;
        basename = pages[index].basename;
        break;
      }
    }
    return <Component basename={basename} setPage={setPage} size={size} />;
  };
  //
  return <div className="pageSetting">{renderComponent()}</div>;
};

export default HomePage;
