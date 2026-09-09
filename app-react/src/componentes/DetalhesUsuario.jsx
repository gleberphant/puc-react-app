import { Table } from "react-bootstrap";

export default function DetalhesUsuario({ usuarioSelecionado }) {
  return (
    <>
      <Table striped hover size="md">
        <tbody>
          <tr>
            <th>Uid:</th>
            <td>{usuarioSelecionado?.Uid ?? ""}</td>
          </tr>
          <tr>
            <th>Nome Completo:</th>
            <td>{usuarioSelecionado?.Nome ?? ""}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{usuarioSelecionado?.Email ?? ""}</td>
          </tr>
          <tr>
            <th>Login:</th>
            <td>{usuarioSelecionado?.Login ?? ""}</td>
          </tr>
          <tr>
            <th>Perfil:</th>
            <td>{usuarioSelecionado?.Perfil ?? ""}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
