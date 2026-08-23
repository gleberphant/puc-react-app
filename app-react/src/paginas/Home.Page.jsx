import { Button } from "react-bootstrap";

export default function HomePage() {
  const onClickLogout = () => {
    fazerLogout();
    window.location.reload();
  };

  return (
    <>
      <h1>LOGIN REALIZADO COM SUCESSO</h1>
      <p>
        <Button onClick={onClickLogout}>SAIR</Button>
      </p>
    </>
  );
}
