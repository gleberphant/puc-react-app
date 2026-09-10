const REQUEST_URL = "http://localhost:4000/login";

// faz o request api/login e armazena o jwt no local storage
export async function fazerLogin(login, senha) {
  try {
    console.log("Fazendo login em:", REQUEST_URL);

    const resposta = await fetch(REQUEST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login: login, senha: senha }),
    });

    const responseBody = await resposta.json();

    // se status diferente de 200
    if (!resposta.ok) {
      throw new Error(
        "Code:",
        resposta.status,
        resposta.statusText,
        "Body",
        responseBody,
      );
    }

    if (responseBody.token == null) {
      throw new Error("Token inválido");
    }

    //  sucesso então armazena token no local Storage
    console.log("body retornado:", responseBody);

    localStorage.setItem("token", responseBody.token);
    localStorage.setItem("usuario", responseBody.usuario);

    return responseBody.usuario;
  } catch (err) {
    console.error(err);
    return null;
  }
}

// fazer logout
export function fazerLogout() {
  console.log("fazendo log out");
  localStorage.removeItem("token");
}

export function CheckToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  return token;
}
