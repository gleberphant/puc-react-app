import "../estilos/ListaUsuarios.Page.css";

// dependências
import { useEffect, useState } from "react";
import { ExcluirUsuario, ListarUsuarios } from "../servicos/usuarios";
import { Button, Spinner, Table } from "react-bootstrap";
import Carregando from "../componentes/Carregando";

// paginas
import EditarUsuarioModal from "./EditarUsuario.Modal";
import ExibirUsuarioModal from "./ExibirUsuario.Modal";

export default function ListarUsuariosPage() {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [excluindo, setExcluindo] = useState(false);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState({});
  const [verDetalhes, setVerDetalhes] = useState(false);
  const [verEdicao, setVerEdicao] = useState(false);

  // construtor e destrutor do componente
  useEffect(() => {
    const carregarLista = async () => {
      console.info("Montando a Página Lista de Usuários");
      setCarregando(true);

      let [lista, err] = await ListarUsuarios();

      if (err != null) {
        alert("Falha no carregamento da lista");
        setListaUsuarios([]);
      } else {
        setListaUsuarios(lista);
      }

      setCarregando(false);
    };

    carregarLista();

    return () => {
      console.info("Desmontando Página de Lista de Usuários");
    };
  }, []);

  const RecarregarLista = async () => {
    setCarregando(true);

    let [lista, err] = await ListarUsuarios();

    if (err != null) {
      alert("Falha no carregamento da lista");
      setListaUsuarios([]);
    } else {
      setListaUsuarios(lista);
    }

    setCarregando(false);
  };

  const acaoExcluirUsuario = async (usuario) => {
    setExcluindo(true);

    if (!confirm(`Deseja realmente remover ${usuario.Nome} ?`)) {
      setExcluindo(false);
      return;
    }

    const [, err] = await ExcluirUsuario(usuario.Uid);

    setExcluindo(false);

    if (err != null) {
      alert(`Falha ao deletar usuario: ${err.message}`);
      return;
    }

    RecarregarLista();
  };

  const acaoVerDetalhes = (usuario) => {
    setUsuarioSelecionado(usuario);
    setVerDetalhes(true);
  };

  const acaoEditar = (usuario) => {
    setUsuarioSelecionado(usuario);
    setVerEdicao(true);
  };

  if (carregando || listaUsuarios == null) return <Carregando></Carregando>;

  return (
    <>
      <div className="lista-usuarios">
        <ExibirUsuarioModal
          usuarioSelecionado={usuarioSelecionado}
          show={verDetalhes}
          fechar={() => setVerDetalhes(false)}
        />

        <EditarUsuarioModal
          usuarioSelecionado={usuarioSelecionado}
          show={verEdicao}
          fechar={() => {
            setVerEdicao(false);
            RecarregarLista();
          }}
        />

        <Table striped hover size="sm">
          <thead>
            <tr>
              <th>Login</th>
              <th>Nome Completo</th>
              <th>Email</th>
              <th>Perfil</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {listaUsuarios.map((u) => {
              return (
                <tr key={u.Uid}>
                  <td>{u.Login}</td>
                  <td>{u.Nome}</td>
                  <td>{u.Email}</td>
                  <td>{u.Perfil}</td>
                  <td>
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => acaoVerDetalhes(u)}
                      aria-label="Ver detalhes"
                      className="bi bi-eye-fill"
                      style={{ fontSize: "24px" }}
                    />
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => acaoEditar(u)}
                      aria-label="Ver detalhes"
                      className="bi bi-pen-fill"
                      style={{ fontSize: "22px", color: "orange" }}
                    />
                    {!excluindo ? (
                      <Button
                        variant="link"
                        onClick={() => acaoExcluirUsuario(u)}
                        aria-label="Excluir Usuario"
                        className="bi bi-person-x-fill"
                        style={{ fontSize: "24px", color: "crimson" }}
                      />
                    ) : (
                      <Spinner animation="border" size="sm" role="status" />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
