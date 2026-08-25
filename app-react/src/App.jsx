import { estaAutenticado } from "./servicos/autenticacao.js";

import HomePage from "./paginas/Home.Page";
import LoginPage from "./paginas/Login.Page";

export default function App() {
  if (estaAutenticado() == true)
    return (
      <>
        <HomePage />
      </>
    );
  else
    return (
      <>
        <LoginPage />
      </>
    );
}
