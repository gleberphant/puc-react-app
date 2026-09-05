package intermediarios

import "net/http"

func CorsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(res http.ResponseWriter, req *http.Request) {
		// Origem permitida (em produção, substitua pelo domínio exato do seu React, ex: "http://localhost:5173")
		res.Header().Set("Access-Control-Allow-Origin", "*")

		// Métodos HTTP permitidos
		res.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")

		// Cabeçalhos que o cliente tem permissão de enviar
		res.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		// Permite envio de cookies/autenticação se necessário
		res.Header().Set("Access-Control-Allow-Credentials", "true")

		// Trata a requisição de Preflight (feita automaticamente pelo navegador via OPTIONS)
		if req.Method == http.MethodOptions {
			res.WriteHeader(http.StatusNoContent) // 204 No Content
			return
		}

		// Prossegue para o próximo handler/mux
		next.ServeHTTP(res, req)
	})
}
