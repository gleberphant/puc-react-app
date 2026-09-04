package repositorios

import "github.com/gleberphant/puc-react-app/api-go/modelos"

var mockUsuarioDB = []modelos.Usuario{
	{Uid: "1", Login: "admin@admin", Senha: "admin"},
	{Uid: "2", Login: "eduardo.lino@pucpr.br", Senha: "123456"},
	{Uid: "3", Login: "maria@pucpr.br", Senha: "123456"},
	{Uid: "4", Login: "joao@pucpr.br", Senha: "123456"},
}

func GetRepositorio() []modelos.Usuario {
	return mockUsuarioDB
}
