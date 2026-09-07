import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

export function CadastroUsuarioPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formulario = new FormData(e.target);

    const novoUsuario = {
      Login: formulario["login"],
      Senha: formulario["senha"],
      Nome: formulario["nome"],
      Email: formulario["email"],
      Perfil: formulario["perfil"],
    };

    CadastrarUsuario(novoUsuario);
  };

  return (
    <>
      <h3>Cadastro de usuarios</h3>
      <br />
      <Form className="formulario mb-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" as={Row}>
          <Form.Label sm={3} as={Col}>
            Login
          </Form.Label>
          <Col sm={9}>
            <InputGroup>
              <InputGroup.Text id="nomeusuario">@</InputGroup.Text>
              <Form.Control placeholder="Nome do Usuário" />
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
              type="text"
              required
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" as={Row}>
          <Form.Label sm={3} as={Col}>
            Nome Completo{" "}
          </Form.Label>
          <Col>
            <Form.Control
              name="nome"
              placeholder="Nome Completo"
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
            <Form.Select name="perfil" placeholder="Perfil" required>
              <option value="admin">Admin</option>
              <option value="usuario">Usuário</option>
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
