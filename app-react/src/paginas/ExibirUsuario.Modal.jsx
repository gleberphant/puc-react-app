import { Button, Modal } from "react-bootstrap";
import DetalhesUsuario from "../componentes/DetalhesUsuario";

export default function ExibirUsuarioModal({
  usuarioSelecionado,
  show,
  fechar,
}) {
  return (
    <Modal show={show} centered>
      <Modal.Header>Detalhes do Usuário</Modal.Header>
      <Modal.Body>
        <DetalhesUsuario
          usuarioSelecionado={usuarioSelecionado}
        ></DetalhesUsuario>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={fechar}>fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}
