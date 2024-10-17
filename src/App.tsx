import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "@/pages/Login/Login";
import Tasks from "@/components/tasks/Tasks";
import Today from "@/pages/Today/Today";
import Layout from "@/components/layouts/Layout";
import SubTask from "@/pages/Tasks/SubTask";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import NotFound from "./pages/Not-Found/NotFound";
import Settings from "@/components/settings/Settings";
import SettingOptions from "@/components/settings/SettingOptions";
import SubSetting from "./components/settings/SubSetting";
import { ThemeProvider } from "./components/theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="today" element={<Layout main={<Today />} />} />
          <Route path="all-tasks" element={<Layout main={<Tasks />} />}>
            <Route path=":taskId" element={<SubTask />} />
          </Route>
          <Route path="settings" element={<Settings main={<SettingOptions/>} />}>
            <Route path=":settingoption" element={<SubSetting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;