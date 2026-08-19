package controladores

import (
	"net/http"
)

func ConfiguraRotas() *http.ServeMux {
	roteador := http.NewServeMux()

	roteador.HandleFunc("/", PageIndex)
	roteador.HandleFunc("/sobre", PageSobre)
	roteador.HandleFunc("/usuarios", PageUsuarios)

	return roteador

}
