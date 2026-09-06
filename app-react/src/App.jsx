import { estaAutenticado } from "./servicos/autenticacao.js";

import HomePage from "./paginas/Home.Page";
import LoginPage from "./paginas/Login.Page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./paginas/Layout.Page.jsx";

import "./estilos/App.css";
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
