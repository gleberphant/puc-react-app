package main

import (
	"log"
	"net/http"

	"github.com/gleberphant/puc-react-app/api-go/controladores"
)

type AppConfig struct {
	AMBIENTE string
	PORTA    string
}

func main() {

	app := AppConfig{
		AMBIENTE: "dev",
		PORTA:    "8080",
	}

	servidor := http.Server{
		Addr:    app.PORTA,
		Handler: controladores.ConfiguraRotas(),
	}

	log.Printf("\n Starting API server. Ambiente %s \n", app.AMBIENTE)

	if err := servidor.ListenAndServe(); err != nil {
		log.Printf("\n Erro no servidor api... %v", err.Error())
	}

	log.Println("Finalizando ...")

}
