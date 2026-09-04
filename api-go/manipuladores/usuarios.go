package manipuladores

import "net/http"

// CRUD DA ENTISDADE USUARIO

// endpoint CRIAR usuario em json
func CriarUsuarios(res http.ResponseWriter, req *http.Request) {
	// receber json no body

	// chamar service para criar

	// receber confirmação do service

	// retorar json confirmaçao
}

// endpoint LISTAR usuario em json
func ListarUsuarios(res http.ResponseWriter, req *http.Request) {
	// chamar service para listar ususarios

	// receber lista de ususarios do service

	// retornar json com a lista
}

// endpoint EXIBIR usuario em json
func ExibirUsuarios(res http.ResponseWriter, req *http.Request) {
	// chamar service para exibir ususario por id

	// receber usuario
	// retornar json com usuario
}

// endpoint EDITAR usuario em json
func EditarUsuarios(res http.ResponseWriter, req *http.Request) {
	// receber dados no body

	// chamar service apra editar usuario por id

	// receber confirmação de edição do service

	// retornar json confirmação
}

// endpoint DELETAR usuario em json
func DeletarUsuarios(res http.ResponseWriter, req *http.Request) {
	// receber id do usuario alvo

	// chamar service para deletar usuario por id

	// receber confirmação de edição do service

	// retornar json confirmação
}
