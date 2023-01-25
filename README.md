# <p align = "center"> Back-End para o Teste Técnico da in8</p>

<p align="center">
   <img src="https://in8.com.br/wp-content/themes/IN8/assets/images/logo-rodape.svg" width="250px"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-adnanbezerra-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/adnanbezerra/teste-in8-back?color=4dae71&style=flat-square" />

</p>


##  :clipboard: Descrição

Este é o servidor de back-end para o teste técnico da in8, que consiste na construção de uma API relativamente simples para um e-commerce. Neste, o cliente é capaz de criar uma conta, administrar um carrinho e confirmar compras (embora não chegue a ter a funcionalidade de compra completa). Aqui no README eu irei anotar o andamento do projeto e também como eu fiz cada passo na construção; procurarei ser o mais limpo e explícito possível.

De início, como o teste autorizava o uso de qualquer tecnologia que se quisesse, eu aproveitei o meu próprio template de back-end. Ele já vem configurado da forma como eu gosto, com a arquitetura, as configurações do TypeScript, Linter etc. De seguido:

### Meu passo-a-passo na resolução do problema:

- Após leitura cuidadosa na problemática, eu criei um esboço de quais rotas deveriam ser feitas ([clique aqui para ver a foto](https://imgur.com/a/R8uh0ij))
- Passo primeiro da programação efetiva: desenvolver o banco de dados utilizando o Prisma por ORM. O resultado final do BD saiu bastante diferente do desenhado, como era de se esperar.
- De seguido, criação da rota Users e criação dos testes de integração;
- Criação da rota Cart para manutenção dos carrinhos de pedidos dos clientes;

***

## :computer:	 Tecnologias e Conceitos Usados

- Node.js
- TypeScript
- Layered architecture
- PostgreSQL with Prisma
- JWTs
- Testing with Jest and Faker

***

## 🏁 Executando o código

Esse projeto foi feito com [ExpressJS](https://github.com/expressjs/express), então é preciso que sua máquina tenha instaladas as versões estáveis mais recentes do [Node.js](https://nodejs.org/en/download/) e do [npm](https://www.npmjs.com/).

Primeiramente, você precisa clonar esse repositório para a sua máquina:

```
git clone https://github.com/adnanbezerra/teste-in8-back.git
```

Então, dentro do diretório do projeto, você deve rodar o seguinte comando para instalar as dependências necessárias:

```
npm install
```

Agora, você preisa configurar o arquivo `.env`. Você deve copiar o que estiver dentro de `.env.example`, criar um arquivo `.env`, colar as informações copiadas e preencher as variáveis necessária.

Agora, você pode finalmente rodar o seu servidor localmente usando esse comando:
```
npm start
```

Para poder ver o projeto completo, não se esqueça de conferir [o front-end da aplicação](https://github.com/adnanbezerra/teste-in8-front) e de checar lá como fazer o processo de instalação e funcionamento. Ele está codificado em Flutter, e, por isso, pode ser trabalhoso caso não esteja acostumado ainda!
