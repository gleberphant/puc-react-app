package intermediarios

import "net/http"

func CorsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Origem permitida (em produção, substitua pelo domínio exato do seu React, ex: "http://localhost:5173")
		w.Header().Set("Access-Control-Allow-Origin", "*")

		// Métodos HTTP permitidos
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")

		// Cabeçalhos que o cliente tem permissão de enviar
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		// Permite envio de cookies/autenticação se necessário
		w.Header().Set("Access-Control-Allow-Credentials", "true")

		// Trata a requisição de Preflight (feita automaticamente pelo navegador via OPTIONS)
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent) // 204 No Content
			return
		}

		// Prossegue para o próximo handler/mux
		next.ServeHTTP(w, r)
	})
}
