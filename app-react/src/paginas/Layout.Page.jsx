import { Container, Card, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "../estilos/Layout.Page.css";
import { Cabecalho } from "../componentes/Cabecalho";
import { Rodape } from "../componentes/Rodape";

export default function LayoutPage() {
  return (
    <>
      <Container fluid className="app-conteiner">
        <Card className="app-card">
          <Card.Header className="app-header">
            <Cabecalho />
          </Card.Header>

          <Card.Body className="app-body">
            <Card bg="primary" className=" rounded-4">
              <Card.Header>header</Card.Header>
              <Card.Body>body</Card.Body>
              <Card.Footer>footer</Card.Footer>
            </Card>
            <Outlet />
          </Card.Body>
          <Card.Footer className="app-footer">
            <Rodape />
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
}
