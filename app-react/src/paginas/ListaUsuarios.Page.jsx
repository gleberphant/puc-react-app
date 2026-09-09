import { useEffect, useState } from "react";
import {
  EditarUsuario,
  ExcluirUsuario,
  ListarUsuarios,
} from "../servicos/usuarios";
import { Button, Modal, Spinner, Table } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import "../estilos/ListaUsuarios.Page.css";
import Carregando from "../componentes/Carregando";
import ModalUsuario from "../componentes/ModalUsuario";
import FormularioUsuario from "../componentes/FormularioUsuario";

export default function ListarUsuariosPage() {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [excluindo, setExcluindo] = useState(false);

  useEffect(() => {
    const carregarLista = async () => {
      console.info("Montando a Página de Lista de Usuários");
      setCarregando(true);
      const [lista, err] = await ListarUsuarios();
      setCarregando(false);

      if (err != null) setListaUsuarios([]);
      else setListaUsuarios(lista);
    };

    carregarLista();

    return () => {
      console.info("Desmontando Página de Lista de Usuários");
    };
  }, []);

  const acaoExcluirUsuario = async (usuario) => {
    setExcluindo(true);

    const uid = usuario.Uid;

    if (!confirm(`Deseja realmente remover ${usuario.Nome} ?`)) {
      setExcluindo(false);
      return;
    }

    let payload, err;

    [, err] = await ExcluirUsuario(uid);

    setExcluindo(false);

    if (err != null) {
      alert(`Falha ao deletar usuario: ${err.message}`);
      return;
    }

    setCarregando(true);

    [payload, err] = await ListarUsuarios();
    setCarregando(false);

    if (err != null) setListaUsuarios([]);
    else setListaUsuarios(payload);
  };

  const [usuarioSelecionado, setUsuarioSelecionado] = useState({});
  const [show, setShow] = useState(false);

  const acaoVerDetalhes = (usuario) => {
    setUsuarioSelecionado(usuario);
    setShow(true);
  };

  const [editar, setEditar] = useState(false);

  const acaoEditar = (usuario) => {
    setUsuarioSelecionado(usuario);
    setEditar(true);
  };

  const handleSubmit = async (novoUsuario) => {
    let payload, err;

    [, err] = await EditarUsuario(novoUsuario);

    if (err != null) {
      alert("Falha no cadastro: ", err);
    }
    setEditar(false);

    [payload, err] = await ListarUsuarios();
    setCarregando(false);

    if (err != null) setListaUsuarios([]);
    else setListaUsuarios(payload);
  };

  if (carregando || listaUsuarios == null) return <Carregando></Carregando>;

  return (
    <>
      <div className="lista-usuarios">
        <ModalUsuario
          usuario={usuarioSelecionado}
          visivel={show}
          fecharModal={() => setShow(false)}
        ></ModalUsuario>

        <Modal show={editar}>
          <Modal.Body>
            <FormularioUsuario
              usuario={usuarioSelecionado}
              handleSubmit={handleSubmit}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setEditar(false)}>fechar</Button>
          </Modal.Footer>
        </Modal>

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
