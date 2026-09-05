package manipuladores

import "net/http"

func InjetarRotasPage(roteador *http.ServeMux) {
	roteador.HandleFunc("/", PageIndex)
	roteador.HandleFunc("/sobre", PageSobre)
	roteador.HandleFunc("/usuarios", PageUsuarios)

	roteador.HandleFunc("GET /login", LoginPost)
	roteador.HandleFunc("POST /login", LoginPost)
}

func PageIndex(res http.ResponseWriter, req *http.Request) {
	res.Write([]byte("index"))
}

func PageSobre(res http.ResponseWriter, req *http.Request) {
	res.Write([]byte("Pagesobre"))
}
