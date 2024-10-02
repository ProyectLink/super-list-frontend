import { useParams } from "react-router-dom";
import Profile from "./Profile";
import Features from "./Features";
import Subscriptions from "./Subscriptions";
import Integrations from "./Integrations";

const SubSetting = () => {
  const params = useParams();

  if (params.settingoption === "integrations") {
    return <Integrations />;
  }
  if (params.settingoption === "subscriptions") {
    return <Subscriptions />;
  }
  if (params.settingoption === "features") {
    return <Features />;
  }
  if (!params.settingoption || params.settingoption === "profile") {
    return <Profile />;
  }
};

export default SubSetting;
