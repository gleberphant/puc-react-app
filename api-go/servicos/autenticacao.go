package servicos

import (
	"errors"

	"github.com/gleberphant/puc-react-app/api-go/repositorios"
)

func VerificaLoginSenha(login string, senha string) error {
	// verifica se o login existe
	var loginExiste bool = false
	for _, u := range repositorios.GetRepositorio() {
		if u.Login == login {
			loginExiste = true
			break
		}
	}

	if !loginExiste {
		return errors.New("Login inválido")
	}

	// criptografar senha
	senhaCriptografada := senha

	// verificar senha existe
	var senhaValida bool = false
	for _, u := range repositorios.GetRepositorio() {
		if u.Senha == senhaCriptografada {
			// usuario existe
			senhaValida = true
			break
		}
	}

	if !senhaValida {
		return errors.New("Senha inválida")
	}

	return nil
}
