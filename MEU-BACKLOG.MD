# Tarefas

## tarefas documentação

- [x] modelagem da api
- [] segurança com JWT
- [] CONTROLE DE ACESSO RBAC
- [] o auth2
  Sua explicação deve contemplar:

1. Concessão de acesso: Como o usuário autoriza o acesso.

2. Utilização de tokens: Como o token é utilizado para acessar recursos protegidos.

3. Benefícios: Explique vantagens como maior segurança; delegação de permissões; não compartilhamento de senhas.

Observação: não é necessário implementar OAuth 2.0. Basta explicar seu funcionamento no contexto da solução proposta.

## tarefas requisitos do sistema

[x] Cadastro de usuários
[x] Listar todos os usuários;
[x] alterar informações de um usuário já cadastrado
[x] Exclusão de usuários
[x] Login: endpoint responsável pela autenticação dos usuários. O login deverá validar e-mail; senha. Quando as credenciais forem válidas, a API deverá gerar um token JWT.
[x] autenticação com jwt no backend
[x] front end em react;
[x] formulário de login html
[x] telas de listagem , criação e exclusao de usuarios
[x] edição do usuario
[x] Funcionamento da autenticação com JWT;
[x] Implementação dos endpoints solicitados;

## PERFIS DE SISTEMA

[ ] ADM: acesos total ao sistema
[ ] OPERADOR: acesso intermediarios; apenas listar os usuarios; nao poderá criar OU editar outtros usuarios
[ ] CLIENTE: acesso restrito, apenas consultar dados do seu usuario; não podera listar, criar ou editar outros usuarios

## tarefas requisitos atividade

[_] consultar um usuário específico; filtro na tela de listagem de usuario
[_] Controle de acesso por perfis (RBAC);
[_] Justificar as decisões adotadas.
[_] Documentação clara e completa;
[_] Funcionamento geral da solução;
[ ] integração OAtuh2
[_] verificar a aplicação dos princípios REST;
[_] Aplicação de boas práticas de segurança;
[ ] configura git actions e conteiners

---

# relatorio de desenvolvimento

o crud esta concluido; falta implementar consultar um usuario específico por meiod e filtros na tela de listagem
