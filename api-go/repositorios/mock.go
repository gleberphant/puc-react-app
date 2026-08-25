package repositorios

type Usuario struct {
	Login string
	Senha string
}

var MockUsuarioDB = []Usuario{
	{Login: "admin@admin", Senha: "admin"},
	{Login: "eduardo.lino@pucpr.br", Senha: "123456"},
}
