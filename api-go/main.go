package main

import (
	"log"
	"net/http"

	"github.com/gleberphant/puc-react-app/api-go/controladores"
)

func main() {

	roteador := http.NewServeMux()
	roteador.HandleFunc("/", controladores.Index)
	roteador.HandleFunc("/sobre", controladores.Sobre)

	servidor := http.Server{
		Addr:    ":8080",
		Handler: roteador,
	}

	servidor.ListenAndServe()

	log.Println("Starting API server...")

}
