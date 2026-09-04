package servicos

import (
	"errors"

	"github.com/gleberphant/puc-react-app/api-go/repositorios"
)

func VerificaLoginSenha(login string, senha string) error {
	for _, usuario := range repositorios.RepositorioUsuariosMock() {
		if usuario.Login == login && usuario.Senha == senha {
			return nil
		}
	}

	return errors.New("login ou senha invalidos")
}
