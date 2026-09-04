const REQUEST_URL = "http://localhost:4000/login";

async function requestAutenticacao(login, senha) {
  try {
    console.log("Fazendo request em:", REQUEST_URL);
    const resposta = await fetch(REQUEST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, senha }),
    });

    // status diferente de 200
    if (!resposta.ok) {
      console.log(
        "Status Code: ",
        resposta.status,
        "Error:",
        resposta.statusText,
      );
      return [null, "Não foi possível conectar com a API"];
    }

    const body = await resposta.json();

    return [body, null];
  } catch (err) {
    console.log(err);
    return [null, "Não foi possível conectar com a API"];
  }
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
  console.log("Verificando autenticação");
  return localStorage.getItem("token") == null ? false : true;
}
