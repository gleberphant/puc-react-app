package manipuladores

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gleberphant/puc-react-app/api-go/modelos"
	"github.com/gleberphant/puc-react-app/api-go/servicos"
)

func InjetarRotasUsuarios(roteador *http.ServeMux) {
	// create, read, update, delete
	roteador.HandleFunc("POST /usuarios", CriarUsuarios)
	roteador.HandleFunc("GET /usuarios", ListarUsuarios)
	roteador.HandleFunc("GET /usuarios/{uid}", ExibirUsuarios)
	roteador.HandleFunc("PUT /usuarios/{uid}", EditarUsuarios)
	roteador.HandleFunc("DELETE /usuarios/{uid}", DeletarUsuarios)
}

// endpoint CRIAR usuario em json - POST
func CriarUsuarios(res http.ResponseWriter, req *http.Request) {
	// define struct que vai receber o body Request
	var requestBody struct {
		Login  string `json:"login"`
		Senha  string `json:"senha"`
		Nome   string `json:"nome"`
		Email  string `json:"email"`
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
		Login:  requestBody.Login,
		Senha:  requestBody.Senha,
		Nome:   requestBody.Nome,
		Email:  requestBody.Email,
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
	uid := req.PathValue("uid")

	if uid == "" {
		log.Printf("Error: Uid vazio")
		res.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(res).Encode(map[string]string{"error": "Uid vazio"})
		return
	}

	// chama service
	usuario, err := servicos.ExibirUsuario(uid)
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
	// pega paramento do uid
	uid := req.PathValue("uid")
	// definir estrutura que vai recebcer o json
	var requestBody struct {
		Login  string `json:"login"`
		Senha  string `json:"senha"`
		Nome   string `json:"nome"`
		Email  string `json:"email"`
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
		Uid:    uid,
		Login:  requestBody.Login,
		Senha:  requestBody.Senha,
		Nome:   requestBody.Nome,
		Email:  requestBody.Email,
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

	uid := req.PathValue("uid")

	if uid == "" {
		log.Printf("Error Parametro inválido")
		res.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(res).Encode(map[string]string{"error": "Parâmetro Inválido"})
		return
	}

	// chamar service para deletar usuario por id
	err := servicos.DeletarUsuarios(uid)
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
