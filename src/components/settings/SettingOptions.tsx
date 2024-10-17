import OptionButtons from "./OptionButtons";
import Profile from "./Profile";
import SettingContainer from "./SettingContainer";
import { Outlet, useParams } from "react-router-dom";

const SettingOptions = () => {
  const params = useParams();
  return (
    <SettingContainer className="text-sm">
      <div className="w-11/12 mx-auto">
        <div className="mt-10 text-5xl font-bold opacity-85">Settings</div>
        <OptionButtons />
      </div>

      <div className="w-11/12 mx-auto mt-6">{Object.keys(params).length === 0 ? <Profile /> : <Outlet />}</div>
    </SettingContainer>
  );
};

export default SettingOptions;