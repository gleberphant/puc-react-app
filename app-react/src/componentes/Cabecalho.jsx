import {
  OverlayTrigger,
  Popover,
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../estilos/Layout.Page.css";
import PUCBRASAO from "../assets/images/pucpr-brasao-redondo.png";

export function Cabecalho({ logout, usuario }) {
  return (
    <Navbar className="app-navbar" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img height="50" src={PUCBRASAO}></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" justify="true">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/usuarios">
              Listar Usuarios
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cadastro">
              Novo Usuario
            </Nav.Link>

            <Nav.Link as={NavLink} to="/sobre">
              Sobre
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={
                <Popover id="popover-positioned-bottom">
                  <Popover.Header as="h3">{usuario.Email}</Popover.Header>
                  <Popover.Body>
                    {usuario.Email}
                    {usuario.Nome}
                    {usuario.Perfil}
                  </Popover.Body>
                </Popover>
              }
            >
              <Nav.Link as="button">Perfil</Nav.Link>
            </OverlayTrigger>
            <Nav.Link as="button" onClick={logout}>
              Sair
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
