import "./index.css";

const Contact = ({ basenamePage, setPage, size, open, animate }) => {
  return (
    <div
      style={{
        display: animate ? "none" : "flex",
      }}
      id={`${basenamePage}-section-mid`}
    >
      <div id={`${basenamePage}-section-mid-top`}>
        <div id={`${basenamePage}-section-mid-top-box`}></div>
      </div>
      <div id={`${basenamePage}-section-mid-mid`}>
        <div id={`${basenamePage}-section-mid-mid-box`}></div>
      </div>
      <div id={`${basenamePage}-section-mid-bot`}>
        <div id={`${basenamePage}-section-mid-bot-box`}>
          <div id={`${basenamePage}-section-mid-bot-text`}>
            <span>{"© 2022 Lucas Ribeiro"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
