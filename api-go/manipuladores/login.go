package manipuladores

import (
	"encoding/json"
	"log"
	"net/http"
	"time"

	"github.com/gleberphant/puc-react-app/api-go/servicos"
	"github.com/golang-jwt/jwt/v5"
)

func InjetarRotasLogin(roteador *http.ServeMux) {
	roteador.HandleFunc("POST /login", LoginPost)
}

func LoginPost(res http.ResponseWriter, req *http.Request) {
	// define struct que vai receber o request
	var requestBody struct {
		Login string `json:"login"`
		Senha string `json:"senha"`
	}

	// extrai login e senha do body
	err := json.NewDecoder(req.Body).Decode(&requestBody)
	if err != nil {
		log.Printf("Error: %s", err.Error())
		res.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(res).Encode(map[string]string{"error": err.Error()})
		return
	}

	// chama o service
	err = servicos.VerificaLoginSenha(requestBody.Login, requestBody.Senha)
	// confirmação do service
	if err != nil {
		res.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(res).Encode(map[string]string{"error": "Usuario não autorizado"})
		return
	}

	// cria token jwt
	tokenJwt := jwt.NewWithClaims(jwt.SigningMethodHS256,
		jwt.MapClaims{
			"login":  requestBody.Login,
			"perfil": "admin",
			"exp":    time.Now().Add(time.Hour).Unix(),
			"iat":    time.Now().Unix(),
		})

	// transforma em strings
	tokenString, err := tokenJwt.SignedString([]byte("minha-senha-secreta"))
	if err != nil {
		log.Printf("Error: %s", err.Error())
		res.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(res).Encode(map[string]string{"error": "Erro ao gerar Token "})
		return
	}

	// responde ao cliente
	res.WriteHeader(http.StatusOK)
	json.NewEncoder(res).Encode(map[string]string{"origin": "go", "token": tokenString})
}
