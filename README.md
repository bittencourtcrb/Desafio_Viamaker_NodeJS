<h1 align="center">
    Desafio Viamaker - API NodeJS
</h1>

<h3 align="center">
API Restful em NodeJS utilizando MongoDB
</h3>

<p align="center">
  <a>Sobre o projeto</a> | <a href="#computer-tecnologias">Tecnologias</a> | <a href="#books-guia-de-instalação-e-execução">Guia de instalação e execução</a> <a href="#rotas-do-projeto">Rotas do projeto</a>
</p>


## Sobre o projeto

**Desafio** : Criar uma API Restful em NodeJS utilizando MongoDB.
**Funcionalidades**:
1) **Escola**: Cadastrar, Alterar, Obter, Listar, Deletar
2) **Turma**: Cadastrar, Alterar, Obter, Listar, Deletar
3) **Alunos**: Cadastrar, Alterar, Obter, Listar, Deletar

**Estrutura das Entidades**:
- Escola - Nome, CNPJ
- Turma - Nome
- Alunos - Nome, Turma

**OBS**: Uma escola tem N turmas, e cada turma tem N alunos.

## :computer: Tecnologias

Além das tecnologias abaixo, esta aplicação foi desenvolvida também com essas práticas de desenvolvimento!
<p><strong>TDD</strong>(Test-driven development) Design patterns: <strong>SOLID</strong>, <strong>DDD</strong>(Domain-Driven Design) e <strong>DRY</strong>(Don't Repeat Yourself)</p>

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)
- [ESLint-Airbnb](https://eslint.org/), [Prettier](https://prettier.io/) e [EditorConfig](https://editorconfig.org/)
- [Jest](https://jestjs.io/)
- [TypeORM](https://typeorm.io/#/)
- [Cors](https://github.com/expressjs/cors)
- [Tsyringe](https://github.com/microsoft/tsyringe)

## :books: Guia de instalação e execução

### Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) v10.20 ou maior
- [Yarn](https://yarnpkg.com/)
- Uma instância de [Mongodb](https://www.mongodb.com/)

### Como executar


- Clone o repositório ```git clone https://github.com/bittencourtcrb/Desafio_Viamaker_NodeJS```
- Vá até o diretório ```cd Desafio_Viamaker_NodeJS```
- Execute ```yarn``` para instalar as dependências
- Abra o arquivo .env e preencha com suas variáveis de ambiente
- Abra o arquivo ormconfig.json e preencha com suas credenciais das instâncias dos bancos de dados
- Execute ```yarn dev:server``` para rodar o servidor


Caso deseje executar os testes unitários e de integração basta executar ```yarn test``` em seu terminal. Você poderá ver um relatório da cobertura acessando o arquivo ```coverage/lcov-report/index.html```.

## Rotas do Projeto


1) **Escola**:
  - Cadastrar
    POST - /escolas
      {
        "name": "",
        "cnpj": ""
      }
  - Alterar
    PUT - /escolas
      {
        "name": "",
        "cnpj": ""
      }
  - Obter
   GET - /escolas/unique
      {
        "cnpj": ""
      }
  - Listar
    GET - /escolas
  - Deletar
    DELETE - /escolas/:id
2) **Turma**:
  - Cadastrar
    POST - /turmas
      {
        "name": "",
        "escola_id": ""
      }
  - Alterar
    PUT - /turmas/:id
      {
        "name": "",
        "escola_id": ""
      }
  - Obter
   GET - /turmas/unique
      {
        "name": ""
      }
  - Listar
    GET - /turmas
  - Deletar
    DELETE - /turmas/:id
3) **Alunos**:
- Cadastrar
    POST - /alunos
      {
        "name": "",
        "turma_id": ""
      }
  - Alterar
    PUT - /alunos/:id
      {
        "name": "",
        "turma_id": ""
      }
  - Obter
   GET - /alunos/unique
      {
        "id": ""
      }
  - Listar
    GET - /alunos
  - Deletar
    DELETE - /alunos/:id


