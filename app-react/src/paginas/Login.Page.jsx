import { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import { fazerLogin } from "../servicos/autenticacao";

const handleSubmit = async (login, senha, event) => {
  event.preventDefault();

  const err = await fazerLogin(login, senha);

  if (err != null) {
    alert(err);
    return;
  }

  window.location.reload();
};

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Card
        style={{ width: "100%", maxWidth: "420px" }}
        className="p-4 shadow-sm border rounded-4"
      >
        <h4 className="text-center mb-4">Acesso ao Sistema</h4>

        <Form onSubmit={(e) => handleSubmit(login, senha, e)}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={login}
              placeholder="Digite seu email"
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupSenha">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              value={senha}
              placeholder="Password"
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupCheckbox">
            <Form.Check type="checkbox" label="Não sou robô" required />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Enviar
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
