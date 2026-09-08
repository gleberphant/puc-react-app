const BASE_URL = "http://localhost:4000/";

export async function CadastrarUsuario(novoUsuario) {
  console.log("cadastrando novo usuario");
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token inválido");
      return null;
    }

    console.info("cadastrando usuario: ", novoUsuario);


    const resposta = await fetch(`${BASE_URL}/usuario`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify(novoUsuario),
    });

    const responseBody = await resposta.json();

    if (!resposta.ok) {
      console.error("CODE", resposta.status, resposta.statusText);
      console.error("BODY", responseBody);
      return new Error("Error", resposta.status, resposta.statusText);
    }

    console.log("Response body", responseBody);
    return null;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function GetListaUsuario() {
  console.log("Listando usuarios do sistema");
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Sem token no local storage");
      return null;
    }

    const resposta = await fetch(`${BASE_URL}/usuarios`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    if (!resposta.ok) {
      console.log("Error:", resposta.status, resposta.statusText);
      return null;
    }

    const responseBody = await resposta.json();
    console.log("usuarios:", responseBody.usuarios);

    return [...responseBody.usuarios];
  } catch (err) {
    console.error("Error na requisição ", err);
    return null;
  }
}
