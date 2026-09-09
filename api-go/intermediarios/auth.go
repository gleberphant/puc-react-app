package intermediarios

import (
	"log"
	"net/http"

	"github.com/golang-jwt/jwt/v5"
)

func AuthMidleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(res http.ResponseWriter, req *http.Request) {
		if req.URL.Path == "/login" || req.Method == http.MethodOptions {
			log.Printf("Rota pública sem login")
			next.ServeHTTP(res, req)
			return
		}

		tokenString := req.Header.Get("Authorization")

		//log.Printf("Token: %s", authorization)

		if tokenString == "" {
			http.Error(res, "Token ausente", http.StatusUnauthorized)
			return
		}

		// verifica assinatura do token
		autorizacao, err := jwt.ParseWithClaims(
			tokenString,
			jwt.MapClaims{},
			func(token *jwt.Token) (interface{}, error) {
				// Impede aceitar outro algoritmo de assinatura
				if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
					return nil, jwt.ErrSignatureInvalid
				}

				return []byte("minha-senha-secreta"), nil
			},
		)

		if err != nil || !autorizacao.Valid {
			log.Printf("Token inválido ou expirado")
			http.Error(res, "Token inválido ou expirado", http.StatusUnauthorized)
			return
		}

		log.Printf("Usuario autorizado ")

		next.ServeHTTP(res, req)
	})
}
