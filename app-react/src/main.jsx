import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Roteador from "./roteador/Roteador.jsx";
import LoginPage from "./paginas/Login.Page";
import { estaAutenticado } from "./servicos/autenticacao.js";

import "bootstrap/dist/css/bootstrap.min.css";

function CheckAutenticacao({ children }) {
  console.log("check autenticação");
  return estaAutenticado() ? children : <LoginPage />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>{estaAutenticado() ? <Roteador /> : <LoginPage />}</StrictMode>,
);
