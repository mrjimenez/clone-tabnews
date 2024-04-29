# clone-tabnews <!-- omit in toc -->

Implementação do <https://www.tabnews.com.br> para o <https://curso.dev>

- [1. Notas](#1-notas)
  - [1.1. Node](#11-node)
  - [1.2. Git](#12-git)
  - [1.3. 1.3, Vercel](#13-13-vercel)
- [2. Desenvolvimento](#2-desenvolvimento)
  - [2.1. Níveis de organização de tarefas](#21-níveis-de-organização-de-tarefas)
  - [2.2. Issues e Milestones no Github](#22-issues-e-milestones-no-github)
- [3. DNS - Domain Name System](#3-dns---domain-name-system)
- [4. Testes Automatizados](#4-testes-automatizados)
- [5. Banco de Dados](#5-banco-de-dados)
- [6. Variáveis de Ambiente](#6-variáveis-de-ambiente)
- [7. Fazer ou não commit do `.env`?](#7-fazer-ou-não-commit-do-env)
- [8. jsconfig.json (paths absolutos)](#8-jsconfigjson-paths-absolutos)
- [9. Migrations](#9-migrations)
- [10. Bug na migrations](#10-bug-na-migrations)

## 1. Notas

### 1.1. Node

1. `node -v`, `docker -v`, `nvm -v`, `nvm ls`, `nvm install lts/hydrogen`, `nvm --help`, `nvm alias default`
2. npm init
3. `npm install next@13.1.6`
4. `npm install react@18.2.0`
5. `npm install react-dom@18.2.0`
6. `npm run dev`

### 1.2. Git

1. `git log`, `git log --stat`
2. .gitignore
3. `git log --oneline`
4. `git add`
5. `git commit --amend`
6. `git commit -m`
7. `git push`

### 1.3. 1.3, Vercel

1. Criar uma conta e fazer ela `olhar` para o seu repositório no Github. Deste modo, toda vez que houver um commit, ela atualiza.
2. O branch `main` é o principal, cada branch que você criar, a Vercel cria um novo ambiente, o que pode ser usado para testar.

## 2. Desenvolvimento

### 2.1. Níveis de organização de tarefas

1. Papel escrito para lembrar as tarefas individuais
2. Quadro Kanban para lembrar as tarefas do grupo
3. Github ou Trello

### 2.2. Issues e Milestones no Github

## 3. DNS - Domain Name System

1. [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System)
2. [Root name server](https://en.wikipedia.org/wiki/Root_name_server)
3. Dia 12: Ganha um .com.br.
4. Registrant (Eu)
5. Registrar (Registro.br, HostGator, UOL, Locaweb)
6. Resgitry (NIC.br)
7. TLD (Top Level Domain)
8. [Registro .br](https://www.registro.br/)

## 4. Testes Automatizados

1. `npm run test:watch`

## 5. Banco de Dados

1. Escolher DBMS (MySQL, PostgresSQL, MongoDB, etc.)
2. Escolher Query
3. Como executar Migrations
4. Relacional (SQL) vs Não Relacional (NoSQL)
5. Armazenamento de documentos, chave-valor
6. Série temporal, espacial.
7. Lambas da AWS
8. Postgres: pg
9. ORM
10. Migrations: node-pg-migrate
11. Docker `docker --version`
12. Docker Compose `docker-compose --version`
13. Mailcatcher
14. Dockerfile -> Compila e vira uma imagem. Container é uma imagem rodando. Toda vez que for levantado, é a mesma coisa que está rodando.
15. Imagem oficial do postgres no hub.docker.com
16. `docker compose up`
17. `docker ps --all`
18. `docker logs clone-tabnews-database-1`
19. Cliente Postgres linha de comando: psql: `sudo apt install postgresql-client`
20. `psql --host=localhost --username=postgres --port=5432`
21. ports na configuração.
22. `docker compose up -d --force-recreate`
23. `docker compose down`
24. `docker compose --file infra/compose.yaml up -d`
25. Client `pg`
26. `npm install pg@8.11.3`

## 6. Variáveis de Ambiente

1. Arquivo .env
2. JavaScript: `process.env.VAR`
3. compose.yaml:     `env_file: \n - ../.env`

## 7. Fazer ou não commit do `.env`?

- A maioria vai dizer que não, mas a Vercel fala que sim pois essas variáveis ganham valores default.
- Tudo que for colocado em `.env`, ou `.env.production` ou `.env.development` tem menor precedência do que o que estiver definido diretamente na Vercel.

## 8. jsconfig.json (paths absolutos)

## 9. Migrations

1. Proibido alterações manuais
2. Criar um arquivo de migração
3. "up" para fazer alterações
4. "down" para desfazer alterações
5. npm i @types/jest -D
6. "down" quase nunca é usado. Why rollback when you can always roll forward?

## 10. Bug na migrations

- curl -s https://marcelo-jimenez.com.br/api/v1/status | python3 -m json.tool
