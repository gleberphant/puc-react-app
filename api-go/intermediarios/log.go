package intermediarios

import (
	"log"
	"net/http"
)

func LogMidleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("| Requisao: %s |  Metodo: %s | Host: %s", r.URL.Path, r.Method, r.Host)
		next.ServeHTTP(w, r)
	})
}
