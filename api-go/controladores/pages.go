package controladores

import "net/http"

func PageIndex(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("index"))
}

func PageSobre(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Pagesobre"))
}

func PageUsuarios(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("listar usuarios"))
}
