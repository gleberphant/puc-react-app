import { Button, Modal, Table } from "react-bootstrap";

export default function ModalUsuario({ usuario, visivel, fecharModal }) {
  return (
    <>
      <Modal show={visivel}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <Table striped hover size="md">
            <tbody>
              <tr>
                <th>Uid:</th>
                <td>{usuario?.Uid ?? ""}</td>
              </tr>
              <tr>
                <th>Nome Completo:</th>
                <td>{usuario?.Nome ?? ""}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{usuario?.Email ?? ""}</td>
              </tr>
              <tr>
                <th>Login:</th>
                <td>{usuario?.Login ?? ""}</td>
              </tr>
              <tr>
                <th>Perfil:</th>
                <td>{usuario?.Perfil ?? ""}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={fecharModal}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
