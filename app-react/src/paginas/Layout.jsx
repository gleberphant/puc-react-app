import { Container, Row, Col, Card } from "react-bootstrap";
import Cabecalho from "../componentes/Cabecalho";
import Rodape from "../componentes/Rodape";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100 border">
      <Card
        style={{ width: "100%", maxWidth: "1024px" }}
        className="p-0 shadow-sm border rounded-4"
      >
        {/* CABEÇALHO */}
        <Cabecalho />

        {/* conteudo principal */}
        <Row>
          <Col className="justify-content-center">
            <Outlet></Outlet>
          </Col>
        </Row>

        {/* RODAPE*/}

        <Row>
          <Col>
            <Rodape />
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
