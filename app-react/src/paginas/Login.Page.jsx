import { Container, Card, Button, Form } from "react-bootstrap";

export default function LoginPage({ login }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const f = new FormData(e.target);

    console.log("email", f.get("login"), "senha", f.get("senha"));

    login(f.get("login"), f.get("senha"));
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Card
        style={{ width: "100%", maxWidth: "420px" }}
        className="p-4 shadow-sm border rounded-4"
      >
        <h4 className="text-center mb-4">Acesso ao Sistema</h4>

        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="login"
              type="text"
              placeholder="Digite seu Login"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupSenha">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              name="senha"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupCheckbox">
            <Form.Check type="checkbox" label="Não sou robô" required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
