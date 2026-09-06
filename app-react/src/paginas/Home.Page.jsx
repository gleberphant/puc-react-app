import { Button } from "react-bootstrap";
import { fazerLogout } from "../servicos/autenticacao";

export default function HomePage() {
  const onClickLogout = () => {
    fazerLogout();
    window.location.reload();
  };

  return (
    <>
      <h1>LOGIN REALIZADO COM SUCESSO</h1>
      <p>
        <Button onClick={onClickLogout}> Clique para Sair </Button>
      </p>
    </>
  );
}
