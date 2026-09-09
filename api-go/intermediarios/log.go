package intermediarios

import (
	"log"
	"net/http"
)

func LogMidleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(res http.ResponseWriter, req *http.Request) {
		log.Printf("| Requisao: %s |  Metodo: %s | Host: %s", req.URL.Path, req.Method, req.Host)
		next.ServeHTTP(res, req)
	})
}
