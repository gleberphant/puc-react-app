# Processo de login: Como o usuário envia suas credenciais?

- Ao acessar a aplicação, o app-react verifica a existência de um token JWT no localStorage;
- se não houver token, a página de login é renderizada;
- o usuário preenche login e senha e envia o formulário;
- o frontend faz uma requisição POST para a rota /login do backend Go;
- os dados são enviados em formato JSON.

# Geração do token: Como o sistema cria o JWT após autenticação?

- o backend recebe o JSON com login e senha;
- valida as credenciais no serviço de autenticação;
- se a autenticação for válida, gera um JWT usando a biblioteca jwt-go;
- o token é assinado com uma chave secreta e retornado ao cliente.

# Quais Informações armazenadas no token?

- uid;
- login;
- perfil;
- data de emissão (iat);
- data de expiração (exp).

# Política de expiração: Informe o tempo de validade do token. ?

- 1 hora.

# Justifique sua escolha.

- A expiração em 1 hora equilibra segurança e usabilidade;
- reduz o tempo de risco caso o token seja vazado;
- é uma política padrão e simples para aplicações web;
- no projeto atual, essa política é funcional, mas pode ser melhorada com armazenamento do UID e uso de segredo em variável de ambiente.
