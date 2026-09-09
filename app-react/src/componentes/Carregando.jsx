import { Spinner } from "react-bootstrap";

export default function Carregando() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
        <span>Carregando...</span>
      </div>
    </>
  );
}
