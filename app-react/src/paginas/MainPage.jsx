import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";

export default function MainPage({ callbackFazerLogout }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="dark" data-bs-theme="dark" expand="md">
        <Container>
          <Navbar.Brand href="/">PUC REACT APP</Navbar.Brand>

          {/* O Toggle e o Collapse funcionam automaticamente via aria-controls/id */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* ms-auto empurra os links para a direita */}
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link onClick={callbackFazerLogout}>SAIR</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-4 flex-grow-1">
        <Row>
          <Col>
            <h1>titulo</h1>
            <p>conteudo</p>
          </Col>
        </Row>
      </Container>

      <footer className="bg-light py-3 border-top text-center">
        <Container>
          <span className="text-muted">Rodapé</span>
        </Container>
      </footer>
    </div>
  );
}
