# API Usuários: Exemplo Prático Seminário
Esta é uma API REST simples desenvolvida para demonstrar o uso de JavaScript no back-end utilizando Node.js e o framework Express.js, para trabalho da disciplina Desenvolvimento de Aplicações Distribuídas.  

A aplicação permite realizar operações básicas de CRUD de usuários:  

- Criar usuários  
- Listar usuários  
- Atualizar usuários  
- Remover usuários

O projeto foi estruturado em camadas (routes, controller, DTO e service), seguindo boas práticas de organização e separação de responsabilidades.  

## Tecnologias utilizadas
- Node.js
- Express
- JavaScript (ES6+)

## Pré-requisitos
Antes de rodar o projeto, você precisa ter instalado:  
- Node.js (versão 14 ou superior)  
- npm (gerenciador de pacotes do Node)

### Instalação
1- Clone o repositório  
2- Acesse a pasta do projeto (api-usuarios)  
3- Instale as dependências com npm install  

### Executar o projeto
Para rodar o projeto, use o comando: node app.js

## Endpoints da API
- Listar usuários: GET /usuarios/listar
- Criar usuário: POST /usuarios  
Body (JSON):  
 {  
  "nome": "João",  
  "idade": 25,  
  "telefone": "123456789"  
}  
- Atualizar usuário: PUT /usuarios/:id  
- Remover usuário: DELETE /usuarios/:id  

## Observações

- Os dados são armazenados em memória (não há banco de dados); portanto, os dados serão perdidos ao parar de rodar a aplicação
- O ID dos usuários é gerado automaticamente de forma incremental 
