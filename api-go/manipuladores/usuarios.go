package manipuladores

import (
	"encoding/json"
	"net/http"

	"github.com/gleberphant/puc-react-app/api-go/modelos"
	"github.com/gleberphant/puc-react-app/api-go/servicos"
)

func InjetarRotasUsuarios(roteador *http.ServeMux) {
	// create
	roteador.HandleFunc("POST /usuario", CriarUsuarios)

	// read
	roteador.HandleFunc("GET /usuarios", ListarUsuarios)
	roteador.HandleFunc("GET /usuario/{uid}", ExibirUsuarios)

	// update
	roteador.HandleFunc("PUT /usuario/{uid}", EditarUsuarios)

	// delete
	roteador.HandleFunc("DELETE /usuario/{uid}", DeletarUsuarios)
}

// CRUD DA ENTISDADE USUARIO

// endpoint CRIAR usuario em json - POST
func CriarUsuarios(res http.ResponseWriter, req *http.Request) {
	// define struct que vai receber o body Request
	var requestBody struct {
		Uid    string `json:"uid"`
		Login  string `json:"login"`
		Senha  string `json:"senha"`
		Nome   string `json:"nome"`
		Perfil string `json:"perfil"`
	}

	// agenda fechamento do body Request para liiberar recursos
	defer req.Body.Close()

	// limita tamanho do body Request para a 1MB para não travar servidor
	req.Body = http.MaxBytesReader(res, req.Body, 1048576)

	// extrai JSON do body Request
	err := json.NewDecoder(req.Body).Decode(&requestBody)
	if err != nil {
		res.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(res).Encode(map[string]string{"error": err.Error()})
		return
	}

	// chamar service para criar
	err = servicos.CriarUsuarios(modelos.Usuario{
		Uid:    requestBody.Uid,
		Login:  requestBody.Login,
		Senha:  requestBody.Senha,
		Nome:   requestBody.Nome,
		Perfil: requestBody.Perfil,
	})
	if err != nil {
		res.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(res).Encode(map[string]string{"error": err.Error()})
		return
	}

	// ESCREVE RESPOSTA COM A  CONFIRMAÇÃO
	res.Header().Set("Content-Type", "application/json")
	res.WriteHeader(http.StatusOK)
	json.NewEncoder(res).Encode(map[string]string{"msg": "usuario criado com sucesso"})
}

// endpoint LISTAR usuario em json
func ListarUsuarios(res http.ResponseWriter, req *http.Request) {
	// chamar service para listar ususarios
	lista, err := servicos.ListarUsuarios()
	if err != nil {
		res.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(res).Encode(map[string]string{"error": err.Error()})
		return
	}

	// ESCREVE RESPOSTA COM A  CONFIRMAÇÃO
	res.Header().Set("Content-Type", "application/json")
	res.WriteHeader(http.StatusOK)
	json.NewEncoder(res).Encode(map[string][]modelos.Usuario{"usuarios": lista})
}

// endpoint EXIBIR usuario em json
func ExibirUsuarios(res http.ResponseWriter, req *http.Request) {
	// chamar service para exibir ususario por id

	// receber usuario
	// ESCREVE RESPOSTA COM A  CONFIRMAÇÃO
	res.Header().Set("Content-Type", "application/json")
	res.WriteHeader(http.StatusOK)
	json.NewEncoder(res).Encode(map[string]string{"msg": "usuario criado com sucesso"})
}

// endpoint EDITAR usuario em json
func EditarUsuarios(res http.ResponseWriter, req *http.Request) {
	// receber dados no body

	// chamar service apra editar usuario por id

	// receber confirmação de edição do service

	// ESCREVE RESPOSTA COM A  CONFIRMAÇÃO
	res.Header().Set("Content-Type", "application/json")
	res.WriteHeader(http.StatusOK)
	json.NewEncoder(res).Encode(map[string]string{"msg": "usuario criado com sucesso"})
}

// endpoint DELETAR usuario em json
func DeletarUsuarios(res http.ResponseWriter, req *http.Request) {
	// receber id do usuario alvo

	// chamar service para deletar usuario por id

	// receber confirmação de edição do service

	// ESCREVE RESPOSTA COM A  CONFIRMAÇÃO
	res.Header().Set("Content-Type", "application/json")
	res.WriteHeader(http.StatusOK)
	json.NewEncoder(res).Encode(map[string]string{"msg": "usuario criado com sucesso"})
}
