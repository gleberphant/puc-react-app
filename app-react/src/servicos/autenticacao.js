import { mockUsuario } from "../repositorios/mockUsuarios";

// service cuida apenas de lógica. não retorna visual
export function fazerLogin(email, senha) {
  // simula requisção do backend
  console.log("fazendo log in");
  let resposta;

  for (const usuario of mockUsuario)
    if (email === usuario.email && senha === usuario.senha)
      resposta = {
        ok: true,
        body: { token: "token-teste" },
        status: 200,
      };
    else
      resposta = {
        ok: true,
        body: { error: "usuário não autorizado" },
        status: 403,
      };

  // serviço fora do ar
  if (!resposta.ok) {
    const error = "Serviço Offline";
    return error;
  }

  // extrai corpo do resultado
  const body = resposta.body;

  // status diferente de 200 - usuario não autorizado
  if (resposta.status != 200) {
    const error = body.error;
    return error;
  }

  // status de retorno 200 . Porem o token foi inválido
  if (body.token == null) {
    const error = "Token Inválido";
    return error;
  }

  //  sucesso então armazena token no local Storage
  localStorage.setItem("token", resposta.token);

  return null;
}

// fazer logout
export function fazerLogout() {
  console.log("fazendo log out");
  localStorage.removeItem("token");
}

export function estaAutenticado() {
  return localStorage.getItem("token") == null ? false : true;
}
