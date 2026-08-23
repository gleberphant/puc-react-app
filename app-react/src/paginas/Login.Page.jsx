import { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import { fazerLogin } from "../servicos/autenticacao";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [alerta, setAlerta] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlerta("");

    const [login, err] = await fazerLogin(email, senha);

    if (err != null) {
      alert(err);
      return;
    }

    window.location.reload();
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Card
        style={{ width: "100%", maxWidth: "420px" }}
        className="p-4 shadow-sm border rounded-4"
      >
        <h4 className="text-center mb-4">Acesso ao Sistema</h4>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
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
