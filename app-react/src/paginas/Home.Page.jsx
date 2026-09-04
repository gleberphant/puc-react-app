import { Button } from "react-bootstrap";
import { fazerLogout } from "../servicos/autenticacao";

const onClickLogout = () => {
  fazerLogout();
  window.location.reload();
};

export default function HomePage() {
  return (
    <>
      <h1>LOGIN REALIZADO COM SUCESSO</h1>
      <p>
        <Button onClick={onClickLogout}> Clique para Sair </Button>
      </p>
    </>
  );
}
