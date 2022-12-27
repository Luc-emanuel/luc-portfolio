import "./index.css";
import { MdMenu } from "react-icons/md";

const Menu = ({ basename, setPage, open, setOpen, size }) => {
  return (
    <div
      id={`${basename}-section-right`}
      style={
        open ? { minWidth: "140px", width: "140px", maxWidth: "140px" } : {}
      }
    >
      <div id={`${basename}-section-right-top`}>
        <MdMenu
          id="menu-open"
          style={open ? { fontSize: "30px" } : {}}
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>
      <div id={`${basename}-section-right-mid`}>
        <div className="notSelect" id={`${basename}-section-right-mid-items`}>
          <span
            style={{ opacity: open ? "1" : "0" }}
            onClick={() => {
              setPage(1);
            }}
          >
            {"INICIO"}
          </span>
          <span
            style={{ opacity: open ? "1" : "0" }}
            onClick={() => {
              //setPage(3);
            }}
          >
            {"PORTFÓLIO"}
          </span>
          <span
            style={{ opacity: open ? "1" : "0" }}
            onClick={() => {
              //setPage(2);
            }}
          >
            {"HISTÓRIA"}
          </span>
          <span
            style={{ opacity: open ? "1" : "0" }}
            onClick={() => {
              //setPage(1);
            }}
          >
            {"CONTATO"}
          </span>
        </div>
      </div>
      <div id={`${basename}-section-right-bot`}>
        <div id={`${basename}-section-right-bot-items`}>
          <span id="language">{"BR"}</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
