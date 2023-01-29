//

export const checkemail = (a) => {
  try {
    if (a.includes(" ")) {
      return false;
    }
    var c = a.split("@");
    var d1 = c[0].length > 0;
    if (c[1].includes(".")) {
      var c2 = c[1].split(".");
      var d2 = c2[0].length > 0;
      var d3 = c2[1].length >= 2;
      if (d1 === true && d2 === true && d3 === true) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch {
    return false;
  }
};

export const hookSize = () => {
  const breakpoints = {
    xs: 400,
    sm: 600,
    md: 700,
    lg: 1200,
    lx: 1400,
    xl: 1650,
  };
  const width = window.innerWidth;
  let resp = "xs";
  for (let indice in breakpoints) {
    if (width >= breakpoints[indice]) {
      resp = indice;
    } else {
      break;
    }
  }
  return resp;
};

export const updateHookSize = (setSize) => {
  window.addEventListener("resize", (e) => {
    setSize(hookSize());
  });
};

const getElement = (type, key) => {
  let doc;
  if (type === "id") {
    doc = document.getElementById(key);
    return doc;
  }
  if (type === "class") {
    doc = document.querySelector(key);
  }
  return doc;
};

const getValue = (obj, property) => {
  let value = window.getComputedStyle(obj).getPropertyValue(property);
  if (value) {
    value = Number(value.split("px")[0]);
  }
  return value;
};

export const tesF = (basenamePage, trigger) => {
  if (trigger === undefined) {
    let doc = getElement("id", `${basenamePage}-section-mid`);
    let doc2 = getElement("id", "transition-section-mid");
    if (doc !== null && doc2 !== null) {
      doc.style["width"] = `${window.innerWidth * 0.8}px`;
      doc2.style["width"] = `${window.innerWidth * 0.8}px`;
    }
  } else {
    window.addEventListener(trigger, (e) => {
      let doc = getElement("id", `${basenamePage}-sections`);
      if (doc !== null) {
        let width = getValue(doc, "width");
        //
        let docAlvo = getElement("id", `${basenamePage}-section-mid`);
        let docAlvo2 = getElement("id", "transition-section-mid");
        if (docAlvo !== null && docAlvo2 !== null) {
          docAlvo.style["width"] = `${width - 380}px`;
          docAlvo2.style["width"] = `${width - 380}px`;
        }
      }
    });
  }
};

export const getValueLocal = (key) => {
  if (key === "page") {
    let value = localStorage[key]
      ? Number(localStorage[key]) === 0
        ? 1
        : Number(localStorage[key])
      : 1;
    return value;
  }
  if (key === "project") {
    let value = localStorage[key] ? JSON.parse(localStorage[key]) : null;
    return value;
  }
};

export const idade = (data) => {
  var ano_aniversario = Number(data[2]),
    mes_aniversario = Number(data[1]),
    dia_aniversario = Number(data[0]);
  var d = new Date(),
    ano_atual = d.getFullYear(),
    mes_atual = d.getMonth() + 1,
    dia_atual = d.getDate(),
    ano_aniversario_new = +ano_aniversario,
    mes_aniversario_new = +mes_aniversario,
    dia_aniversario_new = +dia_aniversario,
    quantos_anos = ano_atual - ano_aniversario_new;
  if (
    mes_atual < mes_aniversario_new ||
    (mes_atual === mes_aniversario_new && dia_atual < dia_aniversario_new)
  ) {
    quantos_anos--;
  }
  return quantos_anos < 0 ? 0 : quantos_anos;
};
