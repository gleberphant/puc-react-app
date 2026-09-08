import { useEffect, useState } from "react";
import { DeletarUsuario, GetListaUsuario } from "../servicos/usuarios";

export function ListarUsuariosPage() {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const ExcluirUsuario = async (uid) => {
    const err = DeletarUsuario(uid);

    if (err != null) {
      alert("falha ao deletar usuario ", err);
    }
    return;
  };

  useEffect(() => {
    const CarregarLista = async () => {
      const lista = await GetListaUsuario();

      if (lista == null) setListaUsuarios([]);
      else setListaUsuarios(lista);

      setCarregando(false);
      return;
    };
    CarregarLista();
  }, []);

  if (carregando || listaUsuarios == null) return <>carregando</>;

  return (
    <>
      <h2>lista de usuarios</h2>

      <table>
        <thead>
          <tr>
            <td>Uid</td>
            <td>Login</td>
            <td>Nome Completo</td>
            <td>Email</td>
            <td>Perfil</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          {listaUsuarios.map((u) => {
            return (
              <>
                <tr key={u.Uid}>
                  <td style={{ border: "1px", borderStyle: "solid" }}>
                    {u.Login}
                  </td>
                  <td style={{ border: "1px", borderStyle: "solid" }}>
                    {u.Nome}
                  </td>
                  <td style={{ border: "1px", borderStyle: "solid" }}>
                    {u.Email}
                  </td>
                  <td style={{ border: "1px", borderStyle: "solid" }}>
                    {u.Perfil}
                  </td>
                  <td style={{ border: "1px", borderStyle: "solid" }}>
                    <button onClick={() => ExcluirUsuario(u.Uid)}> X</button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
