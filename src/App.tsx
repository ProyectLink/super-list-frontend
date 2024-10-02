import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "@/pages/Login/Login";
import Tasks from "@/components/tasks/Tasks";
import Today from "@/pages/Today/Today";
import Layout from "@/components/layouts/Layout";
import SubTask from "@/pages/Tasks/SubTask";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import NotFound from "./pages/Not-Found/NotFound";

const App = () => {
  return (
    <>
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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
