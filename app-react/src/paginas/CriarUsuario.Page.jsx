import { Alert } from "react-bootstrap";
import FormularioUsuario from "../componentes/FormularioUsuario";
import { useState } from "react";

export default function CadastroUsuarioPage() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async () => {
    setShowAlert(true);
  };

  return (
    <>
      <Alert
        variant="success"
        show={showAlert}
        defaultShow={false}
        transition={true}
        dismissible
        onClose={() => setShowAlert(false)}
      >
        <p>Usuario criado com sucesso</p>
      </Alert>
      <FormularioUsuario usuario={{}} fechar={handleSubmit}></FormularioUsuario>
    </>
  );
}
