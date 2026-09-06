const REQUEST_URL = "http://localhost:4000/usuarios";

export async function GetListaUsuario() {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      return [null, "Usuário não autenticado"];
    }

    const resposta = await fetch(REQUEST_URL, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    if (!resposta.ok) {
      console.log("Error:", resposta.status, resposta.statusText);
      return [null, "Falha na requisição"];
    }

    const responseBody = await resposta.json();

    return [responseBody.usuarios, null];
  } catch (err) {
    console.error(err);
    return [null, "Erro na requisição"];
  }
}
