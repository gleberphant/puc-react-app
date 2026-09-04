package repositorios

import (
	"github.com/gleberphant/puc-react-app/api-go/modelos"
)

var repoUsuario = []modelos.Usuario{
	{Uid: "1", Login: "admin@admin", Senha: "admin"},
	{Uid: "2", Login: "eduardo.lino@pucpr.br", Senha: "123456"},
}

func RepositorioUsuariosMock() []modelos.Usuario {
	return repoUsuario
}
