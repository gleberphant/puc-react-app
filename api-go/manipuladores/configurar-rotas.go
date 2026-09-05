package manipuladores

import (
	"net/http"
)

// / deprecated - obsoleto não utilizar - deletar
func ConfiguraRotas() *http.ServeMux {
	roteador := http.NewServeMux()

	roteador.HandleFunc("/", PageIndex)
	roteador.HandleFunc("/sobre", PageSobre)

	roteador.HandleFunc("/usuarios", ListarUsuarios)
	roteador.HandleFunc("GET /usuarios", ListarUsuarios)
	roteador.HandleFunc("POST /usuarios", CriarUsuarios)
	roteador.HandleFunc("GET /usuarios/{uid}", ExibirUsuarios)
	roteador.HandleFunc("PUT /usuarios/{uid}", EditarUsuarios)
	roteador.HandleFunc("DELETE /usuarios/{uid}", DeletarUsuarios)

	roteador.HandleFunc("POST /login", LoginPost)
	return roteador
}
