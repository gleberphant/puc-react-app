// estilos
import "./estilos/App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// dependencias
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fazerLogin, fazerLogout } from "./servicos/autenticacao.js";

// minhas paginas
import HomePage from "./paginas/Home.Page";
import LoginPage from "./paginas/Login.Page";
import LayoutPage from "./paginas/Layout.Page.jsx";
import SobrePage from "./paginas/Sobre.Page.jsx";
import CadastroUsuarioPage from "./paginas/CriarUsuario.Page.jsx";
import ListarUsuariosPage from "./paginas/ListaUsuarios.Page.jsx";
import Carregando from "./componentes/Carregando.jsx";

export default function App() {
  const [logado, setLogado] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  const logout = () => {
    fazerLogout();
    setLogado(false);
  };

  const login = (usuario) => {
    setUsuarioLogado(usuario);
    setLogado(true);
  };

  if (logado || usuarioLogado != null)
    return (
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <LayoutPage logout={logout} usuarioLogado={usuarioLogado} />
            }
          >
            <Route
              path="/"
              element={
                <HomePage logout={logout} usuarioLogado={usuarioLogado} />
              }
            />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/usuarios" element={<ListarUsuariosPage />} />
            <Route path="/cadastro" element={<CadastroUsuarioPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  else
    return (
      <>
        <LoginPage loginCallback={login} />
      </>
    );
}
