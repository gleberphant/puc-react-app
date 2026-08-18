package controladores

import "net/http"

func Index(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("index"))
}

func Sobre(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("sobre"))
}
