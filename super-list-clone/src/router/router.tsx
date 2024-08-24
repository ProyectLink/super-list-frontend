// importacion de la rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importacion del main principal
import Home from "../pages/Home/Home";

const Router = () => {
    return <>
     <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}>


        </Route>
        </Routes>
     </BrowserRouter>
    </>;
}
 
export default Router;