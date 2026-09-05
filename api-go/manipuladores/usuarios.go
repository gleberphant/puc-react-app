package manipuladores

import (
	"encoding/json"
	"log"
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

	// extrai JSON do body Request
	err := json.NewDecoder(req.Body).Decode(&requestBody)
	if err != nil {
		log.Printf("Error: %s", err.Error())
		res.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(res).Encode(map[string]string{"error": "requisição inválida"})
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
	// confirmação do service
	if err != nil {
		log.Printf("Error: %s", err.Error())
		res.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(res).Encode(map[string]string{"error": "falha no serviço"})
		return
	}

	// enviar resposta para cliente
	res.WriteHeader(http.StatusOK)
	json.NewEncoder(res).Encode(map[string]string{"msg": "usuario criado com sucesso"})
}

// endpoint LISTAR usuario em json
func ListarUsuarios(res http.ResponseWriter, req *http.Request) {
	// chama service
	lista, err := servicos.ListarUsuarios()
	// confirmação  do service
	if err != nil {
		log.Printf("Error: %s", err.Error())
		res.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(res).Encode(map[string]string{"error": "falha no serviço"})
		return
	}

	// escreve resposta para cliente
	res.WriteHeader(http.StatusOK)
	json.NewEncoder(res).Encode(map[string][]modelos.Usuario{"usuarios": lista})
}

// endpoint EXIBIR usuario em json
func ExibirUsuarios(res http.ResponseWriter, req *http.Request) {
	// extrair o json do body
	var requestBody struct {
		Uid string `json:"uid"`
	}

	err := json.NewDecoder(req.Body).Decode(&requestBody)
	if err != nil {
		log.Printf("Error: %s", err.Error())
		res.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(res).Encode(map[string]string{"error": "falha na requisição"})
		return
	}

	// chama service
	usuario, err := servicos.ExibirUsuario(requestBody.Uid)
	// confirmação  do service
	if err != nil {
		log.Printf("Error: %s", err.Error())
		res.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(res).Encode(map[string]string{"error": "Usuário não encontrado"})
		return
	}

	// escreve resposta para cliente
	res.WriteHeader(http.StatusOK)
	json.NewEncoder(res).Encode(map[string]modelos.Usuario{"usuario": *usuario})
}

// endpoint EDITAR usuario em json
func EditarUsuarios(res http.ResponseWriter, req *http.Request) {
	// definir estrutura que vai recebcer o json
	var requestBody struct {
		Uid    string `json:"uid"`
		Login  string `json:"login"`
		Senha  string `json:"senha"`
		Nome   string `json:"nome"`
		Perfil string `json:"perfil"`
	}

	// extrarir o json do body
	err := json.NewDecoder(req.Body).Decode(&requestBody)
	if err != nil {
		log.Printf("Error: %s", err.Error())
		res.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(res).Encode(map[string]string{"error": "Não foi possível editar o usuário"})
	}

	// chamar service
	err = servicos.EditarUsuarios(modelos.Usuario{
		Uid:    requestBody.Uid,
		Login:  requestBody.Login,
		Senha:  requestBody.Senha,
		Nome:   requestBody.Nome,
		Perfil: requestBody.Perfil,
	})
	// confirmação  do service
	if err != nil {
		log.Printf("Error: %s", err.Error())
		res.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(res).Encode(map[string]string{"error": "Não foi possível editar o usuário"})
		return
	}

	// escreve resposta para cliente
	res.WriteHeader(http.StatusOK)
	json.NewEncoder(res).Encode(map[string]string{"msg": "usuario editado com sucesso"})
}

// endpoint DELETAR usuario em json
func DeletarUsuarios(res http.ResponseWriter, req *http.Request) {
	// extrai json do body

	var requestBody struct {
		Uid string `json:"uid"`
	}

	err := json.NewDecoder(req.Body).Decode(&requestBody)
	if err != nil {
		log.Printf("Error: %s", err.Error())
		res.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(res).Encode(map[string]string{"error": "falha na requisição"})
	}

	// chamar service para deletar usuario por id
	err = servicos.DeletarUsuarios(requestBody.Uid)
	// confirmação  do service
	if err != nil {
		log.Printf("Error: %s", err.Error())
		res.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(res).Encode(map[string]string{"error": "falha no serviço"})
		return
	}

	// escreve resposta para cliente
	res.WriteHeader(http.StatusOK)
	json.NewEncoder(res).Encode(map[string]string{"msg": "usuario deletado com sucesso"})
}
