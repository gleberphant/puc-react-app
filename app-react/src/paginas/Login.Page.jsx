import PUCBRASAO from "../assets/images/pucpr-brasao-redondo.png";
import { Container, Card, Button, Form } from "react-bootstrap";
import "../estilos/Login.Page.css";

export default function LoginPage({ login }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const f = new FormData(e.target);

    console.log("email", f.get("login"), "senha", f.get("senha"));

    login(f.get("login"), f.get("senha"));
  };

  return (
    <Container fluid className="login-page">
      <Card className="login-card">
        <img className="login-logo" src={PUCBRASAO} alt="Brasão da PUCPR" />

        <h4 className="text-center mb-4">Sistemas Web Seguros</h4>

        <Form onSubmit={handleSubmit}>
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

          <Button
            className="d-block mx-auto px-5"
            variant="crimson"
            type="submit"
          >
            Entrar
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
