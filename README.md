# <p align = "center"> Back-End Server Template with TypeScript </p>

<p align="center">
   <img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" width="250px"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-adnanbezerra-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/adnanbezerra/backend-typescript?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Description

That's a simple, very basic TypeScript back-end server template. It's meant for being used as a basis for my personal projects, but I believe it can also
be used by other people. Of course, it follows best my personal likings; still, it's a completely functional server by itself, and  useful
for a broader use.

It's configured with JWT usage, testing support with Jest, Prisma ORM installed, schema validating with Joi and some really useful basic middlewares, including
a really smooth error middleware, and layered architecture.

***

## :computer:	 Technologies and Concepts

- Node.js
- TypeScript
- Layered architecture
- PostgreSQL with Prisma
- JWTs
- Testing with Jest and Faker

***

## :book: Using the template and installing into your computer

   1. Use this repository as a template for your own project
   
   First of all, since this repository is a template, you have to apply it as a new project so that you can use it in your own project.
   
   To do so, you have to click the green "Use this template" button in the beginning of the repository:
   <img src="https://i.imgur.com/iOTkP4R.png" />
   
   Then, you will be able to create a new GitHub repository the way you want to:
   <img src="https://i.imgur.com/uqXGYM5.png" />
   
   2. Clone the project into your machine
   
   Once you have created your own repository, download it into your computer by running
   
   ```
   git clone https://github.com/<YOUR_NAME>/<YOUR_PROJECT_NAME>.git
   ```
   
   Git will start downloading your repository to your local computer, while also keeping it connected to GitHub with Git running. So, you can already start
   coding, without having to worry about other Git details!

***

## 🏁 Running the server

This project was made using [ExpressJS](https://github.com/expressjs/express), so you must have the latest stable versions of 
[Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) running correctly in your machine.

Once you have cloned this repository into your own GitHub and then cloning it to your computer, you must open the respective project directory in you terminal
and then run:

```
npm install
```

Now, you must configure your `.env` file. You must copy what's inside of `.env.example`, create a `.env` file, past the copied informations and fill in the required
variables.

Now, you can finally run your server locally by running this command:
```
npm start
```

:stop_sign: If you want to, visit [this repository](https://github.com/adnanbezerra/template-frontend) and pay a visit to the front-end application template with
React. It already has a router, some basic structures, reset CSS and other pretty useful features to make your front-end programming easier and faster!

## :thinking: How to use the error middleware?

Well, as you must have noticed if you looked at it, the error middleware is quite complex to understand. To be honest, even I don't really know it properly;

Basically, what you have to do is import the specific functions. If you use VSCode, just type, for instance, "throws notFoundError()" and press tab. 
The IDE will automatically handle the error. Also, if you want to include an error message, just type, for instance, "throws unauthorizedError("You must be logged in!").
So, this way, the errors will work out just perfectly.