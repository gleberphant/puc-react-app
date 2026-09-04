import { Container, Card, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "../paginas/Layout.Page.css";

export default function LayoutPage() {
  return (
    <>
      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <Card
          style={{ width: "100%", maxWidth: "1024px" }}
          className="p-4 shadow-sm border rounded-4"
        >
          <Navbar className="app-navbar">
            <NavbarBrand>PUC-PR-WEB</NavbarBrand>
            <NavLink>Inicio</NavLink>
            <NavLink>Usuarios</NavLink>
            <NavLink>Sobre</NavLink>
          </Navbar>

          <Container>
            <Outlet />
          </Container>
          <footer className="app-footer">Criado por Handerson Gleber</footer>
        </Card>
      </Container>
    </>
  );
}
