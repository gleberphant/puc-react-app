package main

import (
	"log"
	"net/http"

	"github.com/gleberphant/puc-react-app/api-go/intermediarios"
	"github.com/gleberphant/puc-react-app/api-go/manipuladores"
)

const (
	AMBIENTE string = "dev"
	PORTA    string = ":4000"
)

func main() {
	roteador := http.NewServeMux()

	manipuladores.InjetarRotasLogin(roteador)
	manipuladores.InjetarRotasPage(roteador)

	handlerComCORS := intermediarios.LogMidleware(
		intermediarios.AuthMidleware(
			intermediarios.CorsMiddleware(roteador),
		),
	)

	servidor := http.Server{
		Addr:    PORTA,
		Handler: handlerComCORS,
	}

	log.Printf("\n Starting API server. Ambiente %s \n", AMBIENTE)

	if err := servidor.ListenAndServe(); err != nil {
		log.Printf("\n Erro no servidor api... %v", err.Error())
	}

	log.Println("Finalizando ...")
}
