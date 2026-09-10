# Rotas

## Rotas - DE USUÁRIOS
| Método     |  Endpoint       |  Finalidade            | Resposta       |
|------------|-----------------|------------------------|----------------|
|GET         | /usuarios       | Listar usuários        | 200 OK         |
|GET         | /usuarios/{uid} | Exibir usuário         | 200 OK         |
|POST        | /usuarios       | Criar usuário          | 201 Created    |
|PUT         | /usuarios/{uid} | Editar usuário         | 200 OK         |
|DELETE      | /usuarios/{uid} | Excluir usuário        | 200 OK         |

## Rotas - DE AUTENTICAÇÃO
|POST        | /login          | Fazer login            | 200 OK         |


## Rotas - DE INFORMAÇÃO
|POST        | /               | Sobre o aplicativo     | 200 OK         |
|POST        | /sobre          | Sobre o autor          | 200 OK         |
 