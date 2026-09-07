import { useEffect, useState } from "react";
import { GetListaUsuario } from "../servicos/usuarios";

export function ListarUsuariosPage() {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const CarregarLista = async () => {

    const lista = await GetListaUsuario();

    if (lista == null) setListaUsuarios([]);
    else setListaUsuarios(lista);

    setCarregando(false);
    return;
  };

  useEffect(() => {
    CarregarLista();
  }, []);

  if (carregando || listaUsuarios == null) return <>carregando</>;

  return (
    <>
      <h2>lista de usuarios</h2>

      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Login</td>
            <td>Perfil</td>
          </tr>
        </thead>
        <tbody>
          {listaUsuarios.map((u) => {
            return (
              <>
                <tr key={u.Uid}>
                  <td style={{ border: "1px", borderStyle: "solid" }}>
                    {u.Nome}
                  </td>
                  <td style={{ border: "1px", borderStyle: "solid" }}>
                    {u.Login}
                  </td>
                  <td style={{ border: "1px", borderStyle: "solid" }}>
                    {u.Perfil}
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
