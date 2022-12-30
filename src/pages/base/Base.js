import "./index.css";
import { tesF } from "../../utils/functions";
import React, { useEffect, useState } from "react";

import { pages } from "../../utils/pages";
import Profile from "../../components/Profile/Profile";
import Menu from "../../components/Menu/Menu";
import Transition from "../../components/Transition/Transition";

const Base = ({ setPage, page, size, animate, project }) => {
  //
  const [basenamePage, setBaseName] = useState(pages[page - 1].basenamePage);
  const [open, setOpen] = useState(false);
  let Component = pages[page - 1].component;
  //
  useEffect(() => {
    tesF(basenamePage);
  }, [basenamePage]);
  tesF(basenamePage, "resize");
  useEffect(() => {
    setBaseName(pages[page - 1].basenamePage);
  }, [page]);
  //
  if (basenamePage) {
    return (
      <div
        id={`base-sections`}
        style={
          size === "xl"
            ? {}
            : size === "lg"
            ? { width: "96%" }
            : size === "lx"
            ? { width: "90%" }
            : {}
        }
      >
        <Profile basenamePage={"base"} setPage={setPage} size={size} />

        <Transition basenamePage={"transition"} animate={animate} />
        <Component
          basenamePage={basenamePage}
          setPage={setPage}
          size={size}
          open={open}
          animate={animate}
          project={project}
        />

        <Menu
          basenamePage={"base"}
          setPage={setPage}
          page={page}
          open={open}
          setOpen={setOpen}
          size={size}
          project={project}
        />
      </div>
    );
  } else {
    return <></>;
  }
};

export default Base;
