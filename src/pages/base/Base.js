import "./index.css";
import { tesF } from "../../utils/functions";
import React, { useEffect, useState } from "react";

import { pages } from "../../utils/pages";
import Profile from "../../components/Profile/Profile";
import Menu from "../../components/Menu/Menu";
import Transition from "../../components/Transition/Transition";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
  MdMenu,
} from "react-icons/md";

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
  const [buttons, setButtons] = useState({
    buttonLeft: false,
    buttonRight: false,
  });
  //
  if (basenamePage) {
    if (size === "xs" || size === "sm" || size === "md") {
      return (
        <div id={`base-sections-v`}>
          <div
            id={`v-button-left`}
            onClick={() => {
              setButtons({ ...buttons, buttonLeft: !buttons.buttonLeft });
            }}
            style={buttons.buttonRight ? { display: "none" } : {}}
          >
            {buttons.buttonLeft === false ? (
              <MdOutlineArrowForwardIos />
            ) : (
              <MdOutlineArrowBackIos />
            )}
          </div>
          <div
            id={`v-button-right`}
            onClick={() => {
              setButtons({ ...buttons, buttonRight: !buttons.buttonRight });
            }}
            style={buttons.buttonLeft ? { display: "none" } : {}}
          >
            {buttons.buttonRight === true ? <></> : <MdMenu />}
          </div>
          {buttons.buttonLeft === true ? (
            <div id="v-profile">
              <Profile basenamePage={"base"} setPage={setPage} size={size} />
            </div>
          ) : buttons.buttonRight === true ? (
            <>
              <Component
                basenamePage={basenamePage}
                setPage={setPage}
                size={size}
                open={open}
                animate={animate}
                project={project}
              />
              <div id="v-menu">
                <Menu
                  basenamePage={"base"}
                  setPage={setPage}
                  page={page}
                  open={buttons.buttonRight === true ? !open : open}
                  setOpen={setOpen}
                  size={size}
                  project={project}
                  setButtons={setButtons}
                  buttons={buttons}
                />
              </div>
            </>
          ) : (
            <>
              <Transition basenamePage={"transition"} animate={animate} />
              <Component
                basenamePage={basenamePage}
                setPage={setPage}
                size={size}
                open={open}
                animate={animate}
                project={project}
              />
            </>
          )}
        </div>
      );
    } else {
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
    }
  } else {
    return <></>;
  }
};

export default Base;
