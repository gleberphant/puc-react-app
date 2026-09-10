import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

export default function FormularioUsuario({
  usuario = {},
  modo = "criar",
  onSubmit,
  onCancel,
}) {
  const editando = modo === "editar";

  const enviaFormulario = async (event) => {
    event.preventDefault();

    const dados = new FormData(event.currentTarget);

    const usuarioForm = {
      Uid: usuario.Uid ?? "",
      Login: dados.get("login"),
      Senha: dados.get("senha"),
      Nome: dados.get("nome"),
      Email: dados.get("email"),
      Perfil: dados.get("perfil"),
    };

    await onSubmit(usuarioForm);
  };

  return (
    <Form className="formulario mb-3" onSubmit={enviaFormulario}>
      {editando ? (
        <Form.Group className="mb-3" as={Row}>
          <Form.Label as={Col} sm={3}>
            UID
          </Form.Label>

          <Col sm={9}>
            <Form.Control
              value={usuario?.Uid ?? ""}
              readOnly
              plaintext
              aria-label="Identificador do usuário"
            />
          </Col>
        </Form.Group>
      ) : (
        <></>
      )}

      <Form.Group className="mb-3" as={Row}>
        <Form.Label as={Col} sm={3}>
          Login
        </Form.Label>

        <Col sm={9}>
          <InputGroup>
            <InputGroup.Text>@</InputGroup.Text>

            <Form.Control
              name="login"
              placeholder="Nome do usuário"
              type="text"
              defaultValue={usuario?.Login ?? ""}
              required
            />
          </InputGroup>
        </Col>
      </Form.Group>

      <Form.Group className="mb-3" as={Row}>
        <Form.Label as={Col} sm={3}>
          Senha
        </Form.Label>

        <Col sm={9}>
          <Form.Control
            name="senha"
            type="password"
            placeholder="Senha"
            defaultValue=""
            required
          />
        </Col>
      </Form.Group>

      <Form.Group className="mb-3" as={Row}>
        <Form.Label as={Col} sm={3}>
          Nome completo
        </Form.Label>

        <Col sm={9}>
          <Form.Control
            name="nome"
            type="text"
            placeholder="Nome completo"
            defaultValue={usuario?.Nome ?? ""}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group className="mb-3" as={Row}>
        <Form.Label as={Col} sm={3}>
          E-mail
        </Form.Label>

        <Col sm={9}>
          <Form.Control
            name="email"
            type="email"
            placeholder="E-mail"
            defaultValue={usuario?.Email ?? ""}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group className="mb-3" as={Row}>
        <Form.Label as={Col} sm={3}>
          Perfil
        </Form.Label>

        <Col sm={9}>
          <Form.Select
            name="perfil"
            defaultValue={usuario?.Perfil ?? "usuario"}
            required
          >
            <option value="usuario">Usuário</option>
            <option value="admin">Administrador</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <div className="d-flex justify-content-end gap-2">
        {onCancel && (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>
        )}

        <Button variant="crimson" type="submit">
          {editando ? "Salvar alterações" : "Criar usuário"}
        </Button>
      </div>
    </Form>
  );
}
