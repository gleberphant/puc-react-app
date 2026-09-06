package servicos

import (
	"errors"

	"github.com/gleberphant/puc-react-app/api-go/repositorios"
)

func VerificaLoginSenha(login string, senhaTexto string) (map[string]string, error) {
	senha := senhaTexto

	for _, usuario := range repositorios.RepositorioUsuariosMock() {
		if usuario.Login == login && usuario.Senha == senha {
			return map[string]string{
				"Uid":    usuario.Uid,
				"Nome":   usuario.Nome,
				"Email":  usuario.Login,
				"Perfil": usuario.Perfil,
			}, nil
		}
	}

	return nil, errors.New("login ou senha invalidos")
}
