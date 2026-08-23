import { Nav, Navbar, Container } from "react-bootstrap";
import { fazerLogout } from "../servicos/autenticacao";

export default function Cabecalho() {
  const onClickLogout = () => {
    fazerLogout();
    window.location.reload();
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="md">
        <Container>
          <Navbar.Brand href="/">PUC REACT APP</Navbar.Brand>

          {/* O Toggle e o Collapse funcionam automaticamente via aria-controls/id */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* ms-auto empurra os links para a direita */}
            <Nav className="ms-auto">
              <Nav.Link href="/" to="/">
                Home
              </Nav.Link>
              <Nav.Link href="sobre" to="/sobre">
                Sobre
              </Nav.Link>
              <Nav.Link href="/" onClick={onClickLogout}>
                Sair
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
