import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

main();

// MAIN
function main() {
  const PORTA = 4000;
  const app = express();
  const roteador = express.Router();

  app.use(cors());
  app.use(express.json());

  roteador.get("/", (req, res) => {
    return res.json({ page: "index" });
  });

  roteador.get("/login", (req, res) => {
    return res.json({ page: "login" });
  });

  roteador.post("/login", login_post);

  app.use("/", roteador);
  app.use("/api-node-express", roteador);

  app.listen(PORTA, () => {
    console.log(`servidor ouvindo na porta ${PORTA}`);
  });
}

// login post
function login_post(req, res) {
  const { login, senha } = req.body;
  const mockUsuario = [
    {
      login: "eduardo.lino@pucpr.br",
      senha: "123456",
    },
    {
      login: "admin@admin",
      senha: "admin",
    },
  ];

  let usuarioExiste = false;

  if (!login || !senha) {
    return res.status(400).json({ error: "Login e senha obrigatórios" });
  }

  for (const u of mockUsuario) {
    if (u.login === login && u.senha === senha) {
      usuarioExiste = true;
      break;
    }
  }

  //usuario não encontrado
  if (!usuarioExiste) {
    return res.status(401).json({ error: "usuario não encontrado" });
  }

  // cria o token jwt
  const tokenJWT = jwt.sign(
    {
      login: login,
      perfil: "admin",
    },
    "jwt-secret",
    {
      expiresIn: "1h",
    },
  );

  res.status(200).json({ token: tokenJWT });
}
