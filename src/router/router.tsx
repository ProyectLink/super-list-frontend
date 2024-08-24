// importacion de la rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importacion del main principal
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
