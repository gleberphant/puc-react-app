import { CriarUsuario } from "../servicos/usuarios";
import FormularioUsuario from "../componentes/FormularioUsuario";

export default function CadastroUsuarioPage() {
  
  const handleSubmit = async (novoUsuario) => {
    const [, err] = await CriarUsuario(novoUsuario);

    if (err != null) {
      alert("Falha no cadastro: ", err);
    }
  };

  return (
    <>
      <FormularioUsuario
        usuario={{}}
        handleSubmit={handleSubmit}
      ></FormularioUsuario>
    </>
  );
}
