import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "@/pages/Login/Login";
import Tasks from "@/components/tasks/Tasks";
import Today from "@/pages/Today/Today";
import Layout from "@/components/layouts/Layout";
import SubTask from "@/pages/Tasks/SubTask";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import NotFound from "./pages/Not-Found/NotFound";
import { ThemeProvider } from "./components/theme-provider";
import Inbox from "./pages/Inbox/Inbox";

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
          <Route path="inbox" element={<Layout main={<Inbox />} />}/>
          <Route path="all-tasks" element={<Layout main={<Tasks />} />}>
            <Route path=":taskId" element={<SubTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
