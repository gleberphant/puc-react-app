import { useState } from "react";
import { Alert } from "react-bootstrap";
import FormularioUsuario from "../componentes/FormularioUsuario";
import { CriarUsuario } from "../servicos/usuarios";

export default function CriarUsuarioPage() {
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (usuario) => {
    setMensagem("");

    const [, erro] = await CriarUsuario(usuario);

    if (erro) {
      setMensagem(`Falha no cadastro: ${erro.message}`);
      return false;
    }

    setMensagem("Usuário criado com sucesso");
    return true;
  };

  return (
    <>
      {mensagem && (
        <Alert
          variant={mensagem.startsWith("Falha") ? "danger" : "success"}
          dismissible
          onClose={() => setMensagem("")}
        >
          {mensagem}
        </Alert>
      )}

      <FormularioUsuario usuario={{}} modo="criar" onSubmit={handleSubmit} />
    </>
  );
}
