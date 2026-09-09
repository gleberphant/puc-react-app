import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

export default function FormularioUsuario({ usuario, handleSubmit }) {
  const enviaFormulario = async (e) => {
    e.preventDefault();

    const f = new FormData(e.target);

    const novoUsuario = {
      Uid: f.get("uid"),
      Login: f.get("login"),
      Senha: f.get("senha"),
      Nome: f.get("nome"),
      Email: f.get("email"),
      Perfil: f.get("perfil"),
    };

    console.log("usuario selecionado", novoUsuario);

    await handleSubmit(novoUsuario);
  };

  return (
    <>
      <Form className="formulario mb-3" onSubmit={enviaFormulario}>
        <Form.Group className="mb-3" as={Row}>
          <Form.Label sm={3} as={Col}>
            Uid
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="uid"
              placeholder="Novo usuario"
              defaultValue={usuario?.Uid ?? ""}
              readOnly
              plaintext
              required
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" as={Row}>
          <Form.Label sm={3} as={Col}>
            Login
          </Form.Label>
          <Col sm={9}>
            <InputGroup>
              <InputGroup.Text id="nomeusuario">@</InputGroup.Text>
              <Form.Control
                name="login"
                placeholder="Nome do Usuário"
                defaultValue={usuario?.Login ?? ""}
                required
              />
            </InputGroup>
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" as={Row}>
          <Form.Label sm={3} as={Col}>
            Senha
          </Form.Label>
          <Col>
            <Form.Control
              name="senha"
              placeholder="Senha"
              defaultValue={usuario?.Senha ?? ""}
              type="text"
              required
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" as={Row}>
          <Form.Label sm={3} as={Col}>
            Nome Completo
          </Form.Label>
          <Col>
            <Form.Control
              name="nome"
              placeholder="Nome Completo"
              defaultValue={usuario?.Nome ?? ""}
              type="text"
              required
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" as={Row}>
          <Form.Label sm={3} as={Col}>
            E-mail
          </Form.Label>
          <Col>
            <Form.Control
              name="email"
              placeholder="E-mail"
              defaultValue={usuario?.Email ?? ""}
              type="email"
              required
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" as={Row}>
          <Form.Label sm={3} as={Col}>
            Perfil
          </Form.Label>
          <Col sm={9}>
            <Form.Select
              name="perfil"
              placeholder="Perfil"
              defaultValue={usuario?.Perfil ?? "usuario"}
              required
            >
              <option value="usuario">Usuário</option>
              <option value="admin">Admin</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Button variant="crimson" type="submit">
          Enviar
        </Button>
      </Form>
    </>
  );
}
