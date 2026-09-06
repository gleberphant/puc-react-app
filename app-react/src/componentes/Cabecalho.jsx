import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../estilos/Layout.Page.css";
import PUCBRASAO from "../assets/images/pucpr-brasao-redondo.png";

export function Cabecalho() {
  return (
    <Navbar className="app-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img height="50" src={PUCBRASAO}></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="Usuários" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Listar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Criar</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#link">Sobre</Nav.Link>
            <Nav.Link href="#link">Perfil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
