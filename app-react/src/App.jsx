// estilos
import "./estilos/App.css";

// dependencias
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fazerLogin, fazerLogout } from "./servicos/autenticacao.js";

// minhas paginas
import HomePage from "./paginas/Home.Page";
import LoginPage from "./paginas/Login.Page";
import LayoutPage from "./paginas/Layout.Page.jsx";
import { CadastroUsuarioPage } from "./paginas/Cadastro.Page.jsx";
import { ListarUsuariosPage } from "./paginas/ListaUsuarios.Page.jsx";
import SobrePage from "./paginas/Sobre.Page.jsx";
export default function App() {
  const [logado, setLogado] = useState(true);
  const [usuarioLogado, setUsuarioLogado] = useState({});
  const [carregando, setCarregando] = useState(false);

  const logout = () => {
    fazerLogout();
    setLogado(false);
  };

  const login = async (login, senha) => {
    setCarregando(true);
    const usuario = await fazerLogin(login, senha);

    if (usuario == null) {
      alert("não foi possível realizar login");
      return;
    }

    setUsuarioLogado(usuario);
    setCarregando(false);
    setLogado(true);
  };

  if (carregando) return <>Carregando</>;
  if (logado)
    return (
      <BrowserRouter>
        <Routes>
          <Route
            element={<LayoutPage logout={logout} usuario={usuarioLogado} />}
          >
            <Route path="/" element={<HomePage />} />
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
        <LoginPage login={login} />
      </>
    );
}
