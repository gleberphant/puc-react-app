const REQUEST_URL = "http://localhost:4000/login";

export let UsuarioLogado = {
  uid: "",
  nome: "",
  email: "",
  perfil: "",
};

// faz o request api/login e armazena o jwt no local storage
export async function fazerLogin(login, senha) {
  try {
    console.log("Fazendo login request em:", REQUEST_URL);

    const resposta = await fetch(REQUEST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, senha }),
    });

    // se status diferente de 200
    if (!resposta.ok) {
      console.log("Error:", resposta.statusText);
      return ["Não foi possível conectar com a API", null];
    }

    const bodyResposta = await resposta.json();

    if (bodyResposta.token == null) {
      ["Token Inválido", null];
    }

    //  sucesso então armazena token no local Storage
    console.log("body retornado:", bodyResposta);

    localStorage.setItem("token", bodyResposta.token);
    localStorage.setItem("usuario", bodyResposta.usuario);

    const usuario = bodyResposta.usuario;

    return [usuario, null];
  } catch (err) {
    console.log(err);
    return ["Não foi possível conectar com a API", null];
  }
}

// fazer logout
export function fazerLogout() {
  console.log("fazendo log out");
  localStorage.removeItem("token");
}
