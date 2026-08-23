import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "../paginas/Layout";
import HomePage from "../paginas/Home.Page";
import SobrePage from "../paginas/Sobre.Page";

export default function Roteador() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="sobre" element={<SobrePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
