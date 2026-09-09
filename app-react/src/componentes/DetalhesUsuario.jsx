import { Table } from "react-bootstrap";

export default function DetalhesUsuario({ usuario }) {
  return (
    <>
      <Table striped hover size="md">
        <tbody>
          <tr>
            <th>Uid:</th>
            <td>{usuario?.Uid ?? ""}</td>
          </tr>
          <tr>
            <th>Nome Completo:</th>
            <td>{usuario?.Nome ?? ""}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{usuario?.Email ?? ""}</td>
          </tr>
          <tr>
            <th>Login:</th>
            <td>{usuario?.Login ?? ""}</td>
          </tr>
          <tr>
            <th>Perfil:</th>
            <td>{usuario?.Perfil ?? ""}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
