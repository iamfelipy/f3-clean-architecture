## Clean Architecture

Projeto prático para estudar Clean Architecture, incluindo testes AAA (Arrange, Act, Assert) nos níveis unitário, integração e e2e.

A aplicação está organizada em três camadas: domain, usecase e infrastructure.

### Rodando os testes

Para testar arquivos de uma pasta:
```bash
npx jest src/usecase/customer/find
```

Para rodar todos os testes:
```bash
npm run test
```

### Contexto

Baseado em Domain-Driven Design (DDD), tomando como referência este [projeto original DDD](https://github.com/iamfelipy/f3-ddd-tatico-patterns-ts).