import express from "express";
import cors from "cors";

import * as autenticacao from "./manipuladores/autenticacao.js";
import * as paginas from "./manipuladores/paginas.js";

const PORTA = 4000;

// função mais server
function main() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  const paginasRouter = paginas.InjetarRotas();
  const autenticacaoRouter = autenticacao.InjetarRotas();

  app.use("/", paginasRouter);
  app.use("/api-node-express", paginasRouter);

  app.use("/", autenticacaoRouter);
  app.use("/api-node-express", autenticacaoRouter);

  app.listen(PORTA, () => {
    console.log(`servidor ouvindo na porta ${PORTA}`);
  });
}

main();
