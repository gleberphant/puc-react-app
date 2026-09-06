package intermediarios

import (
	"net/http"

	"github.com/golang-jwt/jwt/v5"
)

func AuthMidleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(res http.ResponseWriter, req *http.Request) {
		authorization := req.Header.Get("Authorization")

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
