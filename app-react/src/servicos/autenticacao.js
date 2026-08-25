const REQUEST_URL = "http://localhost:4000/login";

// function mockRequest(login, senha) {
//   for (const usuario of mockUsuario) {
//     if (login === usuario.email && senha === usuario.senha)
//       return {
//         ok: true,
//         body: { token: "token-teste" },
//         status: 200,
//       };
//   }
//   return {
//     ok: true,
//     body: { error: "usuário não autorizado" },
//     status: 403,
//   };
// }

async function requestAutenticacao(login, senha) {
  //const response = mockRequest

  const resposta = await fetch(REQUEST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: login,
      senha: senha,
    }),
  });

  // status diferente de 200
  if (!resposta.ok) {
    const error = ` ${resposta.status}: ${(await resposta.json()).error}`;
    return [null, error];
  }

  const body = await resposta.json();

  return [body, null];
}

// service cuida apenas de lógica. não retorna visual
export async function fazerLogin(login, senha) {
  console.log("fazendo log in");

  const [resBody, err] = await requestAutenticacao(login, senha);

  if (err != null) {
    return `${err}`;
  }

  if (resBody.token == null) {
    return `Token inválido`;
  }

  //  sucesso então armazena token no local Storage
  localStorage.setItem("token", resBody.token);

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
