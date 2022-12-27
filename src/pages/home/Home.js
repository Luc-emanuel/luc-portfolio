import "./index.css";
import { tesF } from "../../utils/functions";
import { useEffect, useState } from "react";

import Profile from "../../components/Profile/Profile";
import Informations from "../../components/Informations/Informations";
import Menu from "../../components/Menu/Menu";

const Home = ({ basename, setPage, size }) => {
  //
  const [open, setOpen] = useState(false);
  //
  useEffect(() => {
    tesF(basename);
  }, [basename]);
  tesF(basename, "resize");
  //
  return (
    <div
      id={`${basename}-sections`}
      style={size === "xl" ? {} : size === "lg" ? { width: "96%" } : {}}
    >
      <Profile basename={basename} setPage={setPage} size={size} />
      <Informations
        basename={basename}
        setPage={setPage}
        size={size}
        open={open}
      />
      <Menu
        basename={basename}
        setPage={setPage}
        open={open}
        setOpen={setOpen}
        size={size}
      />
    </div>
  );
};

export default Home;
