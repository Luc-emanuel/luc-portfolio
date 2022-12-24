//
export const hookSize = () => {
  const breakpoints = {
    xs: 400,
    sm: 600,
    md: 700,
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
