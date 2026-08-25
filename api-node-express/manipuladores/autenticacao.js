import express from "express";
import jwt from "jsonwebtoken";
import { mockUsuario } from "../repositorios/mock.js";

const SEGREDO_JWT = "jwt-secret";

// login post
function login_post(req, res) {
  const { login, senha } = req.body;

  if (!login || !senha) {
    return res.status(400).json({ error: "Login e senha obrigatórios" });
  }

  let usuario = null;

  for (const u of mockUsuario) {
    if (u.login === login && u.senha === senha) {
      usuario = u;
      break;
    }
  }

  //usuario não encontrado
  if (usuario == null) {
    return res.status(401).json({ error: "usuario não encontrado" });
  }

  // usuario encontrado. cria o token jwt
  const tokenJWT = jwt.sign(
    {
      login: usuario.login,
      perfil: "admin",
    },
    SEGREDO_JWT,
    {
      expiresIn: "1h",
    },
  );

  res.status(200).json({ token: tokenJWT });
}

//login get
function login_get(req, res) {
  res.send("login post");
}

export function InjetarRotas() {
  const roteador = express.Router();

  roteador.get("/login", login_get);
  roteador.post("/login", login_post);

  return roteador;
}
