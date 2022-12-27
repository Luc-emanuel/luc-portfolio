//
export const hookSize = () => {
  const breakpoints = {
    xs: 400,
    sm: 600,
    md: 700,
    lg: 1200,
    xl: 1450,
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
    if (doc !== null) {
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
        if (docAlvo !== null) {
          docAlvo.style["width"] = `${width - 380}px`;
          docAlvo2.style["width"] = `${width - 380}px`;
        }
      }
    });
  }
};
