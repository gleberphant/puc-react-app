import { Button, Modal } from "react-bootstrap";
import FormularioUsuario from "../componentes/FormularioUsuario";

export default function EditarUsuarioModal({
  usuarioSelecionado,
  show,
  fechar,
}) {
  return (
    <>
      <Modal show={show} centered>
        <Modal.Header>
          Editar Usuário<Button onClick={fechar}>fechar</Button>
        </Modal.Header>
        <Modal.Body>
          <FormularioUsuario usuario={usuarioSelecionado} fechar={fechar} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
