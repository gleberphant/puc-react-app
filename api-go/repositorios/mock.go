package repositorios

import "github.com/gleberphant/puc-react-app/api-go/modelos"

var MockUsuarioDB = []modelos.Usuario{
	{Login: "admin@admin", Senha: "admin"},
	{Login: "eduardo.lino@pucpr.br", Senha: "123456"},
	{Login: "maria@pucpr.br", Senha: "123456"},
	{Login: "joao@pucpr.br", Senha: "123456"},
}
