package repositorios

import (
	"github.com/gleberphant/puc-react-app/api-go/modelos"
)

var repoUsuario = []modelos.Usuario{
	{
		Uid:    "00000000-0000-0000-0000-000000000000",
		Login:  "admin@admin",
		Senha:  "admin",
		Nome:   "Adminsitrador",
		Email:  "admin@admin",
		Perfil: "Admin",
	},
	{
		Uid:    "c6f23200-df9d-45a8-996e-2b92afd6a215",
		Login:  "usuario",
		Senha:  "123456",
		Nome:   "Nome Usuario completo ",
		Email:  "usuario@usuario",
		Perfil: "Usuario",
	},
	{
		Uid:    "7746da64-fc2e-429b-aa17-c1c4b4c76962",
		Login:  "usuario2",
		Senha:  "123456",
		Nome:   "Nome Usuario2 completo",
		Email:  "usuario2@usuario2",
		Perfil: "Usuario",
	},
}

func RepositorioUsuariosMock() []modelos.Usuario {
	return repoUsuario
}
