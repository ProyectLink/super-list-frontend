import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "@/pages/Login/Login";
import Tasks from "@/components/tasks/Tasks";
import Layout from "@/components/layouts/Layout";
import SubTask from "@/pages/Tasks/SubTask";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import NotFound from "./pages/Not-Found/NotFound";
import Settings from "@/components/settings/Settings";
import SettingOptions from "@/components/settings/SettingOptions";
import SubSetting from "./components/settings/SubSetting";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="all-tasks" element={<Layout main={<Tasks />} />}>
            <Route path=":taskId" element={<SubTask />} />
          </Route>
          <Route path="settings" element={<Settings main={<SettingOptions/>} />}>
            <Route path=":settingoption" element={<SubSetting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
