import { Modal } from "react-bootstrap";
import FormularioUsuario from "../componentes/FormularioUsuario";

export default function EditarUsuarioModal({
  usuarioSelecionado,
  show,
  fechar,
  onSubmit,
}) {
  const salvarEdicao = async (usuario) => {
    const sucesso = await onSubmit(usuario);

    if (sucesso) {
      fechar();
    }
  };

  return (
    <Modal
      show={show}
      onHide={fechar}
      centered
      key={usuarioSelecionado?.Uid ?? "novo"}
    >
      <Modal.Header closeButton>
        <Modal.Title>Editar usuário</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormularioUsuario
          usuario={usuarioSelecionado}
          modo="editar"
          onSubmit={salvarEdicao}
          onCancel={fechar}
        />
      </Modal.Body>
    </Modal>
  );
}
