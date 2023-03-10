import "./index.css";
import { infoContacts } from "../../utils/constants";
import { SocialIcon } from "react-social-icons";
import { useEffect, useState } from "react";
import { checkemail } from "../../utils/functions";
import Axios from "../../utils/Axios";

const Contact = ({ basenamePage, setPage, size, open, animate }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [send, setSend] = useState(false);
  const [status, setStatus] = useState(false);
  const [msgStatus, setMsgStatus] = useState("");
  //
  useEffect(() => {
    const check = () => {
      let r1 = form.name.length >= 4;
      let r2 = checkemail(form.email);
      let r3 = form.message.length > 0;
      if (r1 && r2 && r3) {
        setSend(true);
      } else {
        setSend(false);
      }
    };
    check();
  }, [form]);
  //
  const handleForm = (e) => {
    const name = e.target.name;
    setForm({
      ...form,
      [name]: e.target.value,
    });
    setStatus(null);
  };
  //
  const sendMensagem = async () => {
    let result = await Axios.post("/create", {
      nome: form.name,
      email: form.email,
      msg: form.message,
    });
    let data = result?.data;
    if (data._res) {
      setStatus(true);
      if (data._res === "ok") {
        setMsgStatus("Mensagem enviada com sucesso!");
      }
      if (data._res === "error") {
        setMsgStatus("Erro ao enviar a mensagem!");
      }
      setTimeout(() => {
        setStatus(false);
      }, 2000);
    }
    //
    setForm({
      name: "",
      email: "",
      message: "",
    });
    setSend(false);
  };
  //
  if (size === "xs" || size === "sm" || size === "md") {
    return (
      <div
        style={{
          display: animate ? "none" : "flex",
        }}
        id={`v-${basenamePage}-section-mid`}
      >
        <div id={`v-${basenamePage}-section-mid-top`}>
          <div id={`v-${basenamePage}-section-mid-top-box`}>
            <div id={`v-${basenamePage}-section-mid-top-box-line1`}>
              <span>{"Informa????es de contato"}</span>
            </div>
            <div id={`v-${basenamePage}-section-mid-top-box-line2`}>
              {infoContacts.map((item, index) => {
                return (
                  <div
                    key={`v-${basenamePage}-key-card-${index}`}
                    id={`v-${basenamePage}-section-mid-top-box-card`}
                    style={
                      index <= infoContacts.length - 1
                        ? { marginBottom: "20px" }
                        : {}
                    }
                  >
                    {item.map((objeto, indexOjbect) => {
                      return (
                        <div
                          key={`v-${basenamePage}-key-card-item-${indexOjbect}`}
                          id={`v-${basenamePage}-card-item`}
                          style={
                            indexOjbect === 0
                              ? { marginTop: "30px" }
                              : indexOjbect === item.length - 1
                              ? { marginBottom: "30px" }
                              : {}
                          }
                        >
                          <span id={`v-${basenamePage}-card-item-title`}>
                            {objeto.title}
                          </span>
                          {objeto.link ? (
                            <SocialIcon
                              key={`v-${basenamePage}-social-media-${indexOjbect}`}
                              url={objeto.value}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ width: "20px", height: "20px" }}
                              bgColor="#ff9900"
                            />
                          ) : (
                            <span id={`v-${basenamePage}-card-item-value`}>
                              {objeto.value}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div id={`v-${basenamePage}-section-mid-mid`}>
          <div id={`v-${basenamePage}-section-mid-mid-box`}>
            <div id={`v-${basenamePage}-section-mid-mid-box-line1`}>
              <span>{"Entrar em contato"}</span>
            </div>
            <div id={`v-${basenamePage}-section-mid-mid-box-line2`}>
              <div id={`v-${basenamePage}-form-name`}>
                <input
                  spellCheck={false}
                  onChange={(e) => handleForm(e)}
                  value={form.name}
                  name="name"
                  placeholder="Nome"
                  id={`v-${basenamePage}-form-name-input`}
                />
              </div>
              <div id={`v-${basenamePage}-form-email`}>
                <input
                  spellCheck={false}
                  onChange={(e) => handleForm(e)}
                  value={form.email}
                  name="email"
                  placeholder="Email"
                  id={`v-${basenamePage}-form-email-input`}
                />
              </div>
              <div id={`v-${basenamePage}-form-message`}>
                <textarea
                  spellCheck={false}
                  onChange={(e) => handleForm(e)}
                  value={form.message}
                  name="message"
                  placeholder="Mensagem"
                  id={`v-${basenamePage}-form-message-input`}
                  maxLength={500}
                ></textarea>
              </div>
              <div id={`v-${basenamePage}-form-button`}>
                <div
                  onClick={() => {
                    if (send) {
                      sendMensagem();
                    }
                  }}
                  style={{
                    backgroundColor: send ? "#ff9900" : "#fff",
                    cursor: send ? "pointer" : "no-drop",
                  }}
                  id={`v-${basenamePage}-form-button-button`}
                >
                  <span id={`v-${basenamePage}-form-button-button-text`}>
                    {send ? "Enviar mensagem" : "Preencha os campos"}
                  </span>
                </div>
                {status === true && (
                  <div id={`v-${basenamePage}-form-res-status`}>
                    <span>{msgStatus}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div id={`v-${basenamePage}-section-mid-bot`}>
          <div id={`v-${basenamePage}-section-mid-bot-box`}>
            <div id={`v-${basenamePage}-section-mid-bot-text`}>
              <span>{"?? 2022 Lucas Emanuel"}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: animate ? "none" : "flex",
        }}
        id={`${basenamePage}-section-mid`}
      >
        <div id={`${basenamePage}-section-mid-top`}>
          <div id={`${basenamePage}-section-mid-top-box`}>
            <div id={`${basenamePage}-section-mid-top-box-line1`}>
              <span>{"Informa????es de contato"}</span>
            </div>
            <div id={`${basenamePage}-section-mid-top-box-line2`}>
              {infoContacts.map((item, index) => {
                return (
                  <div
                    key={`${basenamePage}-key-card-${index}`}
                    id={`${basenamePage}-section-mid-top-box-card`}
                    style={
                      index === 0 || index === 1
                        ? { width: open ? "25%" : "25%" }
                        : { width: open ? "45%" : "40%" }
                    }
                  >
                    {item.map((objeto, indexOjbect) => {
                      return (
                        <div
                          key={`${basenamePage}-key-card-item-${indexOjbect}`}
                          id={`${basenamePage}-card-item`}
                          style={
                            indexOjbect === 0
                              ? { marginTop: "30px" }
                              : indexOjbect === item.length - 1
                              ? { marginBottom: "30px" }
                              : {}
                          }
                        >
                          <span id={`${basenamePage}-card-item-title`}>
                            {objeto.title}
                          </span>
                          {objeto.link ? (
                            <SocialIcon
                              key={`${basenamePage}-social-media-${indexOjbect}`}
                              url={objeto.value}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ width: "20px", height: "20px" }}
                              bgColor="#ff9900"
                            />
                          ) : (
                            <span id={`${basenamePage}-card-item-value`}>
                              {objeto.value}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div id={`${basenamePage}-section-mid-mid`}>
          <div id={`${basenamePage}-section-mid-mid-box`}>
            <div id={`${basenamePage}-section-mid-mid-box-line1`}>
              <span>{"Entrar em contato"}</span>
            </div>
            <div id={`${basenamePage}-section-mid-mid-box-line2`}>
              <div
                style={
                  size === "xl"
                    ? {}
                    : size === "lg" || size === "lx"
                    ? { height: "25px" }
                    : {}
                }
                id={`${basenamePage}-form-name`}
              >
                <input
                  onChange={(e) => handleForm(e)}
                  value={form.name}
                  name="name"
                  placeholder="Nome"
                  id={`${basenamePage}-form-name-input`}
                />
              </div>
              <div
                style={
                  size === "xl"
                    ? {}
                    : size === "lg" || size === "lx"
                    ? { height: "25px" }
                    : {}
                }
                id={`${basenamePage}-form-email`}
              >
                <input
                  onChange={(e) => handleForm(e)}
                  value={form.email}
                  name="email"
                  placeholder="Email"
                  id={`${basenamePage}-form-email-input`}
                />
              </div>
              <div
                style={
                  size === "xl"
                    ? {}
                    : size === "lg" || size === "lx"
                    ? { height: "120px" }
                    : {}
                }
                id={`${basenamePage}-form-message`}
              >
                <textarea
                  onChange={(e) => handleForm(e)}
                  value={form.message}
                  name="message"
                  placeholder="Mensagem"
                  id={`${basenamePage}-form-message-input`}
                ></textarea>
              </div>
              <div
                style={
                  size === "xl"
                    ? {}
                    : size === "lg" || size === "lx"
                    ? { height: "45px" }
                    : {}
                }
                id={`${basenamePage}-form-button`}
              >
                <div
                  onClick={() => {
                    if (send) {
                      sendMensagem();
                    }
                  }}
                  style={{
                    backgroundColor: send ? "#ff9900" : "#fff",
                    cursor: send ? "pointer" : "no-drop",
                  }}
                  id={`${basenamePage}-form-button-button`}
                >
                  <span id={`${basenamePage}-form-button-button-text`}>
                    {send ? "Enviar mensagem" : "Preencha os campos"}
                  </span>
                </div>
                {status === true && (
                  <div id={`${basenamePage}-form-res-status`}>
                    <span>{msgStatus}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div id={`${basenamePage}-section-mid-bot`}>
          <div id={`${basenamePage}-section-mid-bot-box`}>
            <div id={`${basenamePage}-section-mid-bot-text`}>
              <span>{"?? 2022 Lucas Emanuel"}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Contact;
