import express from "express";
import * as repositorio from "../repositorios/postgres.js";

async function index(req, res) {
  try {
    const result = await repositorio.DB.query("SELECT * FROM usuarios");
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

export function InjetarRotas() {
  const roteador = express.Router();

  roteador.get("/", index);
  roteador.get("/sobre", sobre);

  return roteador;
}
