import "./index.css";
import { MdMenu } from "react-icons/md";
import React from "react";

const Menu = ({ basenamePage, setPage, page, open, setOpen, size }) => {
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
          }}
        />
      </div>
      <div id={`${basenamePage}-section-right-mid`}>
        <div
          className="notSelect"
          id={`${basenamePage}-section-right-mid-items`}
        >
          <span
            style={
              page === 1
                ? {
                    opacity: open ? "1" : "0",
                    color: "#ff9900",
                  }
                : { opacity: open ? "1" : "0" }
            }
            onClick={() => {
              setPage(1);
            }}
          >
            {"INICIO"}
          </span>
          <span
            style={
              page === 2
                ? {
                    opacity: open ? "1" : "0",
                    color: "#ff9900",
                  }
                : { opacity: open ? "1" : "0" }
            }
            onClick={() => {
              setPage(2);
            }}
          >
            {"PORTFÓLIO"}
          </span>
          <span
            style={
              page === 3
                ? {
                    opacity: open ? "1" : "0",
                    color: "#ff9900",
                  }
                : { opacity: open ? "1" : "0" }
            }
            onClick={() => {
              setPage(3);
            }}
          >
            {"HISTÓRIA"}
          </span>
          <span
            style={
              page === 4
                ? {
                    opacity: open ? "1" : "0",
                    color: "#ff9900",
                  }
                : { opacity: open ? "1" : "0" }
            }
            onClick={() => {
              setPage(4);
            }}
          >
            {"CONTATO"}
          </span>
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
