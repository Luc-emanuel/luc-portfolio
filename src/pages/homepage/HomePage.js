import "./index.css";
import React, { useEffect, useState } from "react";
import { hookSize, updateHookSize, getValueLocal } from "../../utils/functions";
import Base from "../base/Base";
import { projects } from "../../utils/constants";

const HomePage = () => {
  const [page, setPageNumber] = useState(getValueLocal("page"));
  const [project, setProject] = useState(getValueLocal("project"));
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  }, []);
  //
  const setPage = (number, index) => {
    if (number === 2 && index !== null && index !== undefined) {
      if (typeof index === "number") {
        if (index < projects.length) {
          setProject(projects[index]);
          localStorage.setItem("project", JSON.stringify(projects[index]));
        } else {
          setProject(null);
        }
      } else {
        setProject(null);
      }
    } else {
      setProject(null);
    }
    if (number !== 2) {
      setProject(null);
    }
    localStorage.setItem("page", number);
    setProject(getValueLocal("project"));
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
      /*if (size === "xs" || size === "sm" || size === "md") {
        return <span id="page-msg-develop">{"Em desenvolvimento..."}</span>;
      } else {*/
      return (
        <Base
          setPage={setPage}
          page={page}
          size={size}
          animate={animate}
          project={project}
        />
      );
    } else {
      return <></>;
    }
  };
  //
  return <div className="pageSetting">{renderComponent()}</div>;
};

export default HomePage;
