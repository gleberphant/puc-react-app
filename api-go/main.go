package main

import (
	"log"
	"net/http"

	"github.com/gleberphant/puc-react-app/api-go/controladores"
)

type AppConfig struct {
	env      string
	servidor http.Server
}

func main() {

	app := AppConfig{
		env: "dev",
		servidor: http.Server{
			Addr:    ":8080",
			Handler: controladores.ConfiguraRotas(),
		},
	}

	app.servidor.ListenAndServe()

	log.Println("Starting API server...")

}
