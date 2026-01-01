## Clean Architecture

Projeto prático desenvolvido em **Node.js** e **TypeScript** para estudar Clean Architecture.

### Estrutura de Camadas

- **Domínio**  
  Bounded contexts de `sales`, com os módulos:
    - `checkout`
    - `customer`
    - `product`

- **Usecase**  
  Orquestração das entidades do domínio para atender as intenções do usuário.

- **Infraestrutura**  
  API e implementação dos repositories.

O projeto utiliza o Notification Pattern para tratar e agregar erros de validação, centralizando mensagens de erro. Também utiliza validators com Yup no domínio para produtividade, promovendo baixo acoplamento entre as regras de validação e as entidades.

### Testes

Os testes seguem o padrão AAA (Arrange, Act, Assert) abrangendo os níveis:
- Testes unitários
- Testes de integração
- Testes end-to-end (e2e)

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