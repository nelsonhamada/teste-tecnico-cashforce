# Cashforce Technical Test

Projeto dockerizado e desenvolvido em Node.js, Sequelize e Vue.js.

---

## O que está implementado

- API REST em Express utilizando Sequelize para integração com o banco de dados.
- Banco de dados inicializado via script SQL (`init.sql`) ao subir o container MySQL.
- Estrutura pronta para integração com frontend Vue.js (diretório será adicionado em breve).
- Foram implementadas migrations, seeders e models do Sequelize para demonstração, mas não são obrigatórios para rodar a aplicação.

---

## Como rodar o projeto

### 1. Suba os containers (Node e MySQL) usando Docker Compose

```sh
docker-compose up -d
```

### 2. Instale as dependências no container Node

```sh
docker exec -it cashforce-backend npm install
```

### 3. Acesse a API

Acesse [http://localhost:3001/main](http://localhost:3001/main) para testar a rota principal.

---

## Comandos úteis para Sequelize

> **Obs.:** Não é necessário rodar migrations/seeders para funcionamento, pois o banco é criado via `init.sql`.  
> Use apenas se quiser testar as funcionalidades do Sequelize.

- Executar migrations:
  ```sh
  npx sequelize-cli db:migrate
  ```

- Popular o banco com seeders:
  ```sh
  npx sequelize-cli db:seed:all
  ```

---

## Estrutura dos diretórios

```
backend/
  src/
    controllers/
    database/
    models/
    routes/
    services/
    ...
  package.json
  Dockerfile
frontend/  # (em breve)
init.sql
docker-compose.yml
```

---

## Sobre o Frontend

O diretório `frontend` será adicionado em breve, utilizando Vue.js para consumir a API e exibir os dados.

---

## Observações

- O banco de dados é criado automaticamente ao subir o container MySQL, usando o script `init.sql`.
- As variáveis de ambiente do banco já estão configuradas no `docker-compose.yml`.
- Para desenvolvimento, o volume `./backend/src:/app-backend/src` permite hot reload do código backend.

---