package intermediarios

import (
	"log"
	"net/http"

	"github.com/golang-jwt/jwt/v5"
)

func AuthMidleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(res http.ResponseWriter, req *http.Request) {
		if req.URL.Path == "/login" || req.Method == http.MethodOptions {
			log.Printf("rota do login")
			next.ServeHTTP(res, req)
			return
		}

		log.Printf("buscando autorização")
		authorization := req.Header.Get("Authorization")

		log.Printf("Token: %s", authorization)

		if authorization == "" {
			http.Error(res, "Token ausente", http.StatusUnauthorized)
			return
		}

		token, err := jwt.ParseWithClaims(
			authorization,
			jwt.MapClaims{},
			func(token *jwt.Token) (interface{}, error) {
				// Impede aceitar outro algoritmo de assinatura
				if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
					return nil, jwt.ErrSignatureInvalid
				}

				return []byte("minha-senha-secreta"), nil
			},
		)

		if err != nil || !token.Valid {
			http.Error(res, "Token inválido ou expirado", http.StatusUnauthorized)
			return
		}

		next.ServeHTTP(res, req)
	})
}
