package repositorios

import (
	"github.com/gleberphant/puc-react-app/api-go/modelos"
)

// var mapaPermissões2 = MapaPermissoes{
// 	"admin": {
// 		"/usuarios": {"GET": true, "POST": true, "PUT": true, "DELETE": true},
// 		"/login":    {"GET": true, "POST": true},
// 	},
// 	"usuario": {
// 		"/usuarios": {"GET": true, "POST": true, "PUT": true, "DELETE": true},
// 		"/login":    {"GET": true, "POST": true},
// 	},
// 	"cliente": {
// 		"/usuarios": {"GET": true, "POST": true, "PUT": true, "DELETE": true},
// 		"/login":    {"GET": true, "POST": true},
// 	},
// }

type MapaPermissoesType map[string]map[string]map[string]bool

var permissoes = MapaPermissoesType{
	"/usuarios": {
		"GET":    {"admin": true, "usuario": true, "cliente": false},
		"POST":   {"admin": true, "usuario": false, "cliente": false},
		"PUT":    {"admin": true, "usuario": false, "cliente": false},
		"DELETE": {"admin": true, "usuario": false, "cliente": false},
	},

	"/login": {
		"GET":    {"admin": true, "usuario": true, "cliente": true},
		"POST":   {"admin": true, "usuario": true, "cliente": true},
		"PUT":    {"admin": true, "usuario": true, "cliente": true},
		"DELETE": {"admin": true, "usuario": true, "cliente": true},
	},
}

func MapaPermissoesMock() *MapaPermissoesType {
	return &permissoes
}

var repoUsuario = []modelos.Usuario{
	{
		Uid:    "00000000-0000-0000-0000-000000000000",
		Login:  "admin",
		Senha:  "admin",
		Nome:   "Adminsitrador",
		Email:  "admin@admin",
		Perfil: "admin",
	},
	{
		Uid:    "c6f23200-df9d-45a8-996e-2b92afd6a215",
		Login:  "usuario1",
		Senha:  "123456",
		Nome:   "Usuario1 Nome completo ",
		Email:  "usuario@usuario",
		Perfil: "usuario",
	},
	{
		Uid:    "7746da64-fc2e-429b-aa17-c1c4b4c76962",
		Login:  "usuario2",
		Senha:  "123456",
		Nome:   "Usuario2 Nome completo",
		Email:  "usuario2@usuario2",
		Perfil: "usuario",
	},

	{
		Uid:    "12345678-1234-1234-1234-123456789000",
		Login:  "cliente1",
		Senha:  "123456",
		Nome:   "Cliente nome completo",
		Email:  "usuario2@usuario2",
		Perfil: "cliente",
	},
}

func RepositorioUsuariosMock() []modelos.Usuario {
	return repoUsuario
}
