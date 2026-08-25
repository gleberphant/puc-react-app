package manipuladores

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/gleberphant/puc-react-app/api-go/repositorios"
	"github.com/golang-jwt/jwt/v5"
)

// devolve o formulario
func LoginGet(w http.ResponseWriter, req *http.Request) {
	w.Write([]byte("formulario login"))
}

// recebe login e senha no body da requisição
// verifica se usuairo existe
// devolve jwt

func LoginPost(res http.ResponseWriter, req *http.Request) {
	// Limita o body a 1MB para não travar servidor
	req.Body = http.MaxBytesReader(res, req.Body, 1048576)
	defer req.Body.Close()

	// define o header da resposta
	res.Header().Set("Content-Type", "application/json")

	// define struct que vai receber o request
	var requestBody struct {
		Login string `json:"login"`
		Senha string `json:"senha"`
	}

	// extrai login e senha do body
	err := json.NewDecoder(req.Body).Decode(&requestBody)
	if err != nil {
		res.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(res).Encode(map[string]string{"error": err.Error()})
		return
	}

	var usuarioEncontrado bool = false

	// verifica se usuario existe
	for _, v := range repositorios.MockUsuarioDB {
		if v.Login == requestBody.Login && v.Senha == requestBody.Senha {
			// usuario existe
			usuarioEncontrado = true
			break
		}
	}

	if !usuarioEncontrado {
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

	tokenString, err := tokenJwt.SignedString([]byte("minha-senha-secreta"))
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(res).Encode(map[string]string{"error": err.Error()})
		return
	}

	res.WriteHeader(http.StatusOK)
	json.NewEncoder(res).Encode(map[string]string{"origin": "go", "token": tokenString})
}
