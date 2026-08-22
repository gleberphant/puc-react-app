import express from "express";
import PGConn from "./db.js";

const PORTA = 4000;
const app = express();
const roteador = express.Router();

// rotas
roteador.get("/", index);
roteador.get("/sobre", sobre);

roteador.get("/login", login_get);
roteador.post("/login", login_post);

//injeta roteador com rota mestre do dominio
app.use("/api-node-express", roteador);
// (Opcional) Mantém funcionamento também na raiz '/'
app.use("/", roteador);

app.listen(PORTA, () => {
  console.log(`servidor ouvindo na porta ${PORTA}`);
});

async function index(req, res) {
  try {
    const result = await PGConn.query("SELECT * FROM usuarios");
    res.json(result.rows); //retorna o resultado em um json
  } catch (error) {
    console.log(error);
    res.status(500).json({
      erro: "falha na conexão com banco de dados",
    });
  }
}

function sobre(req, res) {
  res.send("sobre");
}

function login_get(req, res) {
  res.send("login post");
}

function login_post(req, res) {
  res.send("login post");
}
