//estilos
import "../estilos/Layout.Page.css";

//dependencias
import { Container, Card } from "react-bootstrap";
import { Outlet } from "react-router-dom";

//meus componentes
import { Cabecalho } from "../componentes/Cabecalho";
import { Rodape } from "../componentes/Rodape";

export default function LayoutPage() {
  return (
    <>
      <Container fluid className="app-container">
        {/** Cabeçalho da aplicação */}
        <Card className="app-card">
          <Card.Header className="app-header">
            <Cabecalho />
          </Card.Header>
          {/** Corpo da aplicação */}
          <Card.Body className="app-body">
            <Outlet />
          </Card.Body>
          {/** Rodape da aplicação */}
          <Card.Footer className="app-footer">
            <Rodape />
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
}
