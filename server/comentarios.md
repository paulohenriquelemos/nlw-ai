### iniciar o projeto

npm init -y

### as primeiras instalações

- tsx serve para não precisar ficar convertendo o TS para JS

npm i typescript @types/node tsx -D

npm i fastify

- cria o script no package.json
  "dev": "tsx watch src/server.ts"

### Instalar Prisma

npm i prisma -D

- configuramos o prisma para utilizar o sqLite poer ser mais simples de usar

npx prisma init --datasource-provider sqlite

### Para upload

- não é indicado armazenar arquivos de upload junto com o back-end, podemos utilizar o site abaixo para armazenar os arquivos de upload

https://developers.cloudflare.com/r2/

- mas não utilizaremos na NLW por precisar por um cartão de crédito

### fazer o migrate do prisma

npx prisma migrate dev

- para visualizar as tabelas pelo prisma studio

npx prisma studio

### Para fazer upload

- utilizaremos o fastify multipart

https://github.com/fastify/fastify-multipart

npm i @fastify/multipart

- no JavaScript para não nos perdermos com números grandes como esse "1048576", podemos colocar um underline sem alterar o funcionamento do número "1_048_576"
- no caso, esse número é o tanto de bytes para 1M de tamanho

### dica

import path from 'path'

- quando importamos o path, ele vem da forma acima, mas é recomendável colocar o "node:" antes para saber de onde vem esse pacote, no caso não altera nada colocar o "node:"

import path from 'node:path'

- no caso vai servir para retornar a extensão do arquivo

### instalar o ZOD

- lib para validação

npm i zod

### Instalando a lib da OPEN AI

https://openai.com/

https://platform.openai.com/account/api-keys

- faz o login no site, vai em perfil > View API keys, cria uma key, copia e cola no .env

- instala a lib openai

npm i openai

### instalar a lib dotenv

npm i dotenv -D

- essa lib serve para o node conseguir ler o arquivo .env, pois nativamente o node não consegue ler

### instalar @fastify/cors

npm i @fastify/cors

- serve para bloquear para que o back-end só possa ser acessado por alguns front-ends específicos

### instalar a lib ai

npm i ai

- essa lib serve para mostrar a resposta da chamada a api em partes, ir carregando frase por frase

### para usar a seed

cria no package.json

"prisma": {
"seed": "tsx prisma/seed.ts"
},

depois usa o comando:

npx prisma db seed
