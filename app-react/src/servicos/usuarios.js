const REQUEST_URL = "http://localhost:4000/usuarios";

export async function GetListaUsuario() {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("Sem token no local storage");
      return null;
    }

    const resposta = await fetch(REQUEST_URL, {
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
