import "./index.css";
import CardHome from "../../components/Cards/CardHome/CardHome";
import { hookSize } from "../../utils/functions";

const HomePage = () => {
  const size = hookSize();
  return (
    <div className="pageSetting notSelect">
      <div className="mid">
        <CardHome id="person" size={size} />
      </div>
    </div>
  );
};

export default HomePage;
