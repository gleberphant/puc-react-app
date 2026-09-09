import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { CriarUsuario } from "../servicos/usuarios";

export default function CadastroUsuarioPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const f = new FormData(e.target);

    const novoUsuario = {
      Login: f.get("login"),
      Senha: f.get("senha"),
      Nome: f.get("nome"),
      Email: f.get("email"),
      Perfil: f.get("perfil"),
    };

    const [, err] = await CriarUsuario(novoUsuario);

    if (err != null) {
      alert("Falha no cadastro: ", err);
    }
  };

  return (
    <>
      <br />
      <Form className="formulario mb-3" onSubmit={handleSubmit}>
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
