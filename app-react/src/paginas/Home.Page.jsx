import { Container, Card, Button } from "react-bootstrap";
import { fazerLogout } from "../servicos/autenticacao";

const onClickLogout = () => {
  fazerLogout();
  window.location.reload();
};

export default function HomePage() {
  return (
    <>
      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <Card
          style={{ width: "100%", maxWidth: "420px" }}
          className="p-4 shadow-sm border rounded-4"
        >
          <h1>LOGIN REALIZADO COM SUCESSO</h1>
          <p>
            <Button onClick={onClickLogout}> Clique para Sair </Button>
          </p>
        </Card>
      </Container>
    </>
  );
}
