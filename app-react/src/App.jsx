import MainPage from "./paginas/MainPage";
import LoginPage from "./paginas/LoginPage";
import { useState } from "react";

export default function App() {
  const [usuarioAutenticado, SetUsuarioAutenticado] = useState(true);

  const fazerLogin = (token) => {
    localStorage.setItem("token", token);
    SetUsuarioAutenticado(true);
  };

  const fazerLogout = () => {
    localStorage.removeItem("token");
    SetUsuarioAutenticado(false);
  };

  if (usuarioAutenticado) {
    return <MainPage callbackFazerLogout={fazerLogout} />;
  } else {
    return <LoginPage callbackSetToken={fazerLogin} />;
  }
}
