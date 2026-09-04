import { estaAutenticado } from "./servicos/autenticacao.js";

import HomePage from "./paginas/Home.Page";
import LoginPage from "./paginas/Login.Page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./estilos/Layout.Page.jsx";

export default function App() {
  if (estaAutenticado() == true)
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutPage />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  else
    return (
      <>
        <LoginPage />
      </>
    );
}
