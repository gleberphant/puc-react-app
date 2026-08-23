// função para fazer um request
export function fazerRequisao(endpoint, body) {
  const { email, senha } = body;

  const mockUsuario = [
    {
      email: "eduardo.lino@pucpr.br",
      senha: "123456",
    },
    {
      email: "teste@teste",
      senha: "teste",
    },
  ];

  // sucesso
  for (const usuario of mockUsuario)
    if (email === usuario.email && senha === usuario.senha)
      return {
        ok: true,
        token: "token-teste",
        status: 200,
      };

  // falha
  return {
    ok: true,
    error: "login inválido",
    status: 400,
  };
}
