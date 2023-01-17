import "./index.css";
import {
  MdMenu,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import React, { useEffect, useState } from "react";
import { projects } from "../../utils/constants";

const Menu = ({
  basenamePage,
  setPage,
  page,
  open,
  setOpen,
  size,
  project,
  setButtons = undefined,
  buttons = undefined,
}) => {
  const [listOpen, setListOpen] = useState(false);
  //
  const [hover, setHover] = useState({
    hover: false,
    card: null,
  });
  //
  const handleHover = (e, number) => {
    if (e.type === "mouseover") {
      setHover({ hover: true, card: number });
    }
    if (e.type === "mouseout") {
      setHover({ hover: false, card: number });
    }
  };
  //
  useEffect(() => {
    if (!open) {
      setListOpen(false);
    }
  }, [open]);
  //
  return (
    <div
      id={`${basenamePage}-section-right`}
      style={
        open
          ? {
              minWidth: size === "xl" ? "200px" : "140px",
              width: size === "xl" ? "200px" : "140px",
              maxWidth: size === "xl" ? "200px" : "140px",
            }
          : {}
      }
    >
      <div id={`${basenamePage}-section-right-top`}>
        <MdMenu
          id="menu-open"
          style={open ? { fontSize: "30px" } : {}}
          onClick={() => {
            setOpen(!open);
            if (setButtons !== undefined) {
              setButtons({ ...buttons, buttonRight: !buttons.buttonRight });
            }
          }}
        />
      </div>
      <div id={`${basenamePage}-section-right-mid`}>
        <div
          className="notSelect"
          id={`${basenamePage}-section-right-mid-items`}
        >
          <div
            onMouseOver={(e) => {
              handleHover(e, 1);
            }}
            onMouseOut={(e) => {
              handleHover(e, 1);
            }}
            id={`${basenamePage}-section-right-mid-item`}
          >
            <div
              style={
                page === 1
                  ? {
                      opacity: open ? "1" : "0",
                    }
                  : { opacity: open ? "1" : "0" }
              }
            >
              <span
                style={
                  page === 1
                    ? {
                        color: "#ff9900",
                      }
                    : {}
                }
                onClick={() => {
                  setListOpen(false);
                  setPage(1);
                  setOpen(!open);
                  if (setButtons !== undefined) {
                    setButtons({
                      ...buttons,
                      buttonRight: !buttons.buttonRight,
                    });
                  }
                }}
              >
                {"INICIO"}
              </span>
            </div>
          </div>
          <div
            onMouseOver={(e) => {
              handleHover(e, 2);
            }}
            onMouseOut={(e) => {
              handleHover(e, 2);
            }}
            id={`${basenamePage}-section-right-mid-item`}
          >
            <div
              style={
                page === 2
                  ? {
                      opacity: open ? "1" : "0",
                    }
                  : { opacity: open ? "1" : "0" }
              }
            >
              <span
                style={
                  page === 2
                    ? {
                        color: "#ff9900",
                      }
                    : {}
                }
                onClick={() => {
                  setListOpen(!listOpen);
                }}
              >
                {"PORTFÓLIO"}
              </span>
              <MdKeyboardArrowRight
                onClick={() => {
                  setListOpen(!listOpen);
                }}
                style={
                  hover.hover === true && hover.card === 2
                    ? { opacity: "0" }
                    : { opacity: "1" }
                }
                className={`${basenamePage}-section-right-mid-item-icon-1`}
              />
              <MdKeyboardArrowDown
                onClick={() => {
                  setListOpen(!listOpen);
                }}
                style={
                  hover.hover === true && hover.card === 2
                    ? { opacity: "1" }
                    : { opacity: "0" }
                }
                className={`${basenamePage}-section-right-mid-item-icon-2`}
              />
            </div>
          </div>
          {listOpen && (
            <div id={`${basenamePage}-list-projects`}>
              {projects.map((item, index) => {
                return (
                  <div
                    key={`${basenamePage}-list-projects-key-${index}`}
                    id={`${basenamePage}-list-projects-item`}
                  >
                    <p
                      onClick={() => {
                        setPage(2, index);
                        setOpen(!open);
                        if (setButtons !== undefined) {
                          setButtons({
                            ...buttons,
                            buttonRight: !buttons.buttonRight,
                          });
                        }
                      }}
                      style={project?.id === index ? { color: "#ff9900" } : {}}
                      id={`${basenamePage}-list-projects-item-title`}
                    >
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
          <div
            onMouseOver={(e) => {
              handleHover(e, 3);
            }}
            onMouseOut={(e) => {
              handleHover(e, 3);
            }}
            id={`${basenamePage}-section-right-mid-item`}
          >
            <div
              style={
                page === 3
                  ? {
                      opacity: open ? "1" : "0",
                    }
                  : { opacity: open ? "1" : "0" }
              }
            >
              <span
                style={
                  page === 3
                    ? {
                        color: "#ff9900",
                      }
                    : {}
                }
                onClick={() => {
                  setListOpen(false);
                  setPage(3);
                  setOpen(!open);
                  if (setButtons !== undefined) {
                    setButtons({
                      ...buttons,
                      buttonRight: !buttons.buttonRight,
                    });
                  }
                }}
              >
                {"HISTÓRIA"}
              </span>
            </div>
          </div>
          <div
            onMouseOver={(e) => {
              handleHover(e, 4);
            }}
            onMouseOut={(e) => {
              handleHover(e, 4);
            }}
            id={`${basenamePage}-section-right-mid-item`}
          >
            <div
              style={
                page === 4
                  ? {
                      opacity: open ? "1" : "0",
                    }
                  : { opacity: open ? "1" : "0" }
              }
            >
              <span
                style={
                  page === 4
                    ? {
                        color: "#ff9900",
                      }
                    : {}
                }
                onClick={() => {
                  setListOpen(false);
                  setPage(4);
                  setOpen(!open);
                  if (setButtons !== undefined) {
                    setButtons({
                      ...buttons,
                      buttonRight: !buttons.buttonRight,
                    });
                  }
                }}
              >
                {"CONTATO"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id={`${basenamePage}-section-right-bot`}>
        <div id={`${basenamePage}-section-right-bot-items`}>
          <span id="language">{"BR"}</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
