import "./index.css";
import { tesF } from "../../utils/functions";
import React, { useEffect, useState } from "react";

import Profile from "../../components/Profile/Profile";
import Informations from "../../components/Informations/Informations";
import Menu from "../../components/Menu/Menu";

const Home = ({ basenamePage, setPage, size }) => {
  //
  const [open, setOpen] = useState(false);
  //
  useEffect(() => {
    tesF(basenamePage);
  }, [basenamePage]);
  tesF(basenamePage, "resize");
  //
  return (
    <div
      id={`${basenamePage}-sections`}
      style={size === "xl" ? {} : size === "lg" ? { width: "96%" } : {}}
    >
      <Profile basenamePage={basenamePage} setPage={setPage} size={size} />
      <Informations
        basenamePage={basenamePage}
        setPage={setPage}
        size={size}
        open={open}
      />
      <Menu
        basenamePage={basenamePage}
        setPage={setPage}
        open={open}
        setOpen={setOpen}
        size={size}
      />
    </div>
  );
};

export default Home;
