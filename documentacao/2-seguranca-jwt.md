# Processo de login: Como o usuário envia suas credenciais?
- Ao tentar acessar qualquer rota da aplicação sem um token de autenticação válido, o usuario é redirecionado para a tela de login
- na tela de login o usuario preenche formulario de login e senha em página html e envia para o servidor 
- os dados é enviado pelo método post em formato json

# Geração do token: Como o sistema cria o JWT após autenticação?
- o backend na rota post /login recebe o json com as credenciais de autenticação (login e senha)
- primeiro verifica a existencia do usuário pelo login
- depois ele criptografa a senha e verifica sua validade 
- sendo válido login e senha o backend gera o token jwt e devolver para o cliente


# Informações armazenadas no token: 
- ID do usuário;
- Nome; 
- Perfil;
- Data de emissão.

# Política de expiração: Informe o tempo de validade do token. ?
- 1 hora;


# Justifique sua escolha.

 