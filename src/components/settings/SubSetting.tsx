import { useParams, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Features from "./Features";
import Subscriptions from "./Subscriptions";
import Integrations from "./Integrations";
import { useEffect } from "react";

const SubSetting = () => {
  const params = useParams();
  const navigate = useNavigate();
  const validPaths = ["integrations", "subscriptions", "features", "profile"];
  useEffect(() => {
    if (!validPaths.includes(params.settingoption ?? "") ) {
      navigate("/settings", { replace: true });
    }
  }, [params.settingoption]);

  if (params.settingoption === "integrations") {
    return <Integrations />;
  }
  if (params.settingoption === "subscriptions") {
    return <Subscriptions />;
  }
  if (params.settingoption === "features") {
    return <Features />;
  }
  if (params.settingoption === "profile") {
    return <Profile />;
  }
};

export default SubSetting;