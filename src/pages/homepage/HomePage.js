import "./index.css";
import React, { useEffect, useState } from "react";
import { hookSize, updateHookSize } from "../../utils/functions";
import Base from "../base/Base";

const HomePage = () => {
  const [page, setPageNumber] = useState(
    localStorage.page
      ? Number(localStorage.page) === 0
        ? 1
        : Number(localStorage.page)
      : 1
  );
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  }, []);
  //
  const setPage = (number) => {
    localStorage.setItem("page", number);
    setAnimate(true);
    setPageNumber(number);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  };
  const [size, setSize] = useState(hookSize());
  updateHookSize(setSize);
  //
  const renderComponent = () => {
    if (page) {
      return (
        <Base setPage={setPage} page={page} size={size} animate={animate} />
      );
    } else {
      return <></>;
    }
  };
  //
  return <div className="pageSetting">{renderComponent()}</div>;
};

export default HomePage;
