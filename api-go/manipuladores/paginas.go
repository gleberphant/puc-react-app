package manipuladores

import "net/http"

func PageIndex(res http.ResponseWriter, req *http.Request) {
	res.Write([]byte("index"))
}

func PageSobre(res http.ResponseWriter, req *http.Request) {
	res.Write([]byte("Pagesobre"))
}
