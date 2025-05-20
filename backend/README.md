# Cashforce Technical Test

Projeto Dockerizado e desenvolvido em Node, Sequelize e Vue.js.

## O que está implementado
API Rest em Express que utiliza Sequelize para integração com o banco de dados e interação via Vue.js

Obs.: O banco de dados será criado conforme script fornecido, porém implementei uma migration, seeder e model do sequelize para demonstrar o conhecimento que tenho sobre a ORM, apesar de não ser necessário roda-las para o funcionamento da aplicação.


## Comandos úteis para sequelize:

Execute as migrations para criar as tabelas:
   ```sh
   npx sequelize-cli db:migrate
   ```

Popule o banco com os dados iniciais usando os seeders:
   ```sh
   npx sequelize-cli db:seed:all
   ```

## Como rodar

1. Suba os containers (Node e MySQL) usando Docker Compose:
   ```sh
   docker-compose up -d
   ```

2. Abra um terminal no container do Node:
   ```sh
   docker exec -it cashforce-backend bash
   ```

3. Instale as dependências (caso não estejam instaladas):
   ```sh
   npm install
   ```

