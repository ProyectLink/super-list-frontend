import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "@/pages/Login/Login";
import Tasks from "@/components/tasks/Tasks";
import Layout from "@/components/layouts/Layout";
import SubTask from "@/pages/Tasks/SubTaskPage";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="all-tasks" element={<Layout main={<Tasks />} />}>
            <Route path=":id" element={<SubTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
