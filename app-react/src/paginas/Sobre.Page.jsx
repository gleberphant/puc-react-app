import { Button } from "react-bootstrap";

export default function SobrePage() {
  const onClickLogout = () => {
    fazerLogout();
    window.location.reload();
  };

  return (
    <>
      <h1>PAGINA SOBRE</h1>
      <p>
        <Button onClick={onClickLogout}>SAIR</Button>
      </p>
    </>
  );
}
