# NodeJS API

### Objetivo

A ideia dessa API é Gerar documento para envio

Nessa API é possível você cadastrar e consultar customers além de ter a possibilidade de gerar um arquivo XLS trazendo todos customers cadastrados.

### Features da API

- Cadastro e consulta de Customers

### Recursos utilizados
- TypeScript
- Express
- MongoDB
- Mongoose

### Instalação

Clonando projeto para seu ambiente
```
git clone https://github.com/igorsamaral/evermart-api
```

Acessando o diretório do projeto
```
cd evermart-api
```

Instalando dependências
```
npm i
```

Iniciando a aplicação em http://localhost:3333
```
npm run dev
```

### Endpoints

Cadastrar novo customer
```
HTTP: POST
{baseUrl}/api/customers

{
    "name": "Pedro Cabral",
    "email": "pedro.cabral@gmail.com",
    "skills": ["skill-1", "skill-2"],
    "cpf": "111.222.333-44",
    "rg": "111222333"
}
```

Listar Customers
```
HTTP: GET
{baseUrl}/api/customers
```

Gerar XLS
```
HTTP: POST
{baseUrl}/api/generate-xls/customers
```