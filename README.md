# Certificadora de Competência Identitaria

## Descrição

O **Bons Flúidos** é uma plataforma desenvolvida para combater a pobreza menstrual, promovendo a arrecadação de doações financeiras e absorventes, além de incentivar a doação direta de produtos essenciais. Por meio de uma abordagem colaborativa, o sistema permite a realização de vaquinhas solidárias, o registro de doações recebidas e solicitações de absorventes. Além disso, a plataforma exibe pontos de coleta em um mapa interativo e destaca postagens com as últimas contribuições recebidas.

## Funcionalidades

- **Solicitação de Doação:** Permitir que o usuário solicite uma doação de absorventes preenchendo um formulário.
- **Seja um Financiador:** Permite fazer doações monetárias para o projeto.
- **Doação de Absorvente:** Permite realizar doações de absorventes.
- **Gerenciamento de Estoque:** Permite gerenciar os absorventes do estoque.

## Tecnologias Utilizadas

- Linguagens: **Javascript**
- Frameworks: **React, Node.js**
- Banco de Dados: **Prisma** com **PostgreSQL**
- IDE: **VS Code**
- Servidor: **Não utilizamos**

## Execução do Sistema

- **Primairamente, clone o repósitorio para a sua máquina.**

### Backend
- Acesse a pasta do backend:
  - Abra o CMD e digite:

  ```
   cd backend/certificadora-identitaria
  ```

- Baixe as depêndencias:
  - Abra o CMD e digite:
  ```
  npm install
  ```

- **Banco de Dados:**
  - Crie um novo banco de dados PostgreSQL.
  - Crie um **.env**:
    ```
    DATABASE_URL="postgresql://user:password@host:port/db_name?schema=public
    ```
  - Substítua o ***user*** pelo seu ***usúario***, coloque sua a ***senha*** no ***password***, a ***porta*** no ***port***, e por fim, troque o ***db_name*** pelo nome do seu ***banco de dados***.
  - Abra o CMD e digite o seguinte comando:
    ```
    npx prisma migrate dev
    ```
  - Agora, todas as tabelas foram inicializadas.

- **Senha do JWT:**
  - Dentro do ***.env*** coloque o seguinte código:
    ```
    JWT_SECRET="sua_senha"
    ```
  - Coloque a senha de sua prefêrencia.

- **Rodar o código:**
  - No CMD, rode o seguinte código:
    ```
    npm start
    ```
  - O código estará rodando na porta ***3000***.

## Equipe

- Eduardo Viegas Francisco - **RA: 2525259**
- Rodrigo Aleixo de Fidelis Faria - **RA: 2503573**
- Ana Luiza Jorge Campos - **RA: 2525232**
- Bruna Heloísa Araújo da Silva - **RA: 2525240**
- Gustavo Yuusuke Yoshihara - **RA: 2525291**
