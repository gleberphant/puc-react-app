import { Button, Card } from "react-bootstrap";

export default function HomePage({ logout, usuarioLogado }) {
  return (
    <>
      <Card>
        <Card.Header>
          <h1>Bem Vindo {usuarioLogado?.Nome}</h1>
        </Card.Header>
        <Card.Body>
          <p>Email: {usuarioLogado?.Email}</p>
          <p>Nome: {usuarioLogado?.Nome}</p>
          <p>Perfil: {usuarioLogado?.Perfil}</p>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-danger" onClick={logout}>
            Clique para Sair
          </Button>
        </Card.Footer>
      </Card>
      <p></p>
    </>
  );
}
