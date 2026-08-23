import { fazerRequisao } from "./api";

// service cuida apenas de lógica. não retorna visual

export async function fazerLogin(email, senha) {
  // fazer requisição no backend

  console.log(`Fazendo login com login ${email} e senha  ${senha} \n`);
  const requisicao = fazerRequisao("/login", {
    email: email,
    senha: senha,
  });

  // serviço fora do ar
  if (!requisicao.ok) {
    const error = "Serviço Offline";
    return [false, error];
  }

  // converte resposta em json
  const resposta = requisicao;

  // objeto de retorno invalido
  if (resposta.token == null) {
    const error = "Acesso negado. Login ou Senha inválidos";
    return [false, error];
  }

  //  sucesso então armazena token no local Storage
  localStorage.setItem("token", resposta.token);

  return [true, null];
}

// fazer logout
export function fazerLogout() {
  console.log("fazendo log out");
  localStorage.removeItem("token");
}

export function verToken() {
  console.log(`Token ${localStorage.getItem("token")}`);
  return localStorage.getItem("token");
}

export function estaAutenticado() {
  return verToken() == null ? false : true;
}
