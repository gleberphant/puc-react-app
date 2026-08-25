package manipuladores

import (
	"net/http"
)

func ConfiguraRotas() *http.ServeMux {
	roteador := http.NewServeMux()

	roteador.HandleFunc("/", PageIndex)
	roteador.HandleFunc("/sobre", PageSobre)
	roteador.HandleFunc("/usuarios", PageUsuarios)
	roteador.HandleFunc("POST /login", LoginPost)
	return roteador
}
