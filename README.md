<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="images/nestjs.png" width="512" alt="Nest Logo" />
  </a>
</p>

<h1 align="center">⭐ NestJS Service Template ⭐</h1>

<p align="center">
  Template for new services based on NestJS with the Best Practices and Ready for Production
</p>

<p align="center">
  <a href="https://nodejs.org/docs/latest-v20.x/api/index.html">
    <img src="https://img.shields.io/badge/node-20.x-green.svg" alt="node"/>
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-5.x-blue.svg" alt="typescript"/>
  </a>
  <a href="https://docs.nestjs.com/v10/">
    <img src="https://img.shields.io/badge/npm-10.x-red.svg" alt="npm"/>
  </a>
  <a href="https://expressjs.com/">
    <img src="https://img.shields.io/badge/Web_Framework-Express⚡-black.svg" alt="fastify"/>
  </a>
  <a href="https://swc.rs/">
    <img src="https://img.shields.io/badge/Compiler-SWC_-orange.svg" alt="swc"/>
  </a>
  <a href="https://www.docker.com/">
    <img src="https://img.shields.io/badge/Dockerized 🐳_-blue.svg" alt="docker"/>
  </a>
</p>

## 👀 Motivation

A simple RESTful API built with NestJS that interacts with the Pokémon API, providing functionalities to fetch Pokémon data, including their types and translations.

## Technologies Used

This project is built using the following frameworks and libraries:

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **Winston**: A logging library for Node.js that allows for flexible logging and transport configurations.
- **Class-Transformer & Class-Validator**: Libraries for transforming plain JavaScript objects into class instances and validating them.
- **Swagger**: API documentation framework that integrates with NestJS to create beautiful API documentation automatically.

## Dependencies

The following dependencies are included in the project:

```json
"dependencies": {
    "@nestjs/axios": "^3.0.3",
    "@nestjs/cache-manager": "^2.2.2",
    "@nestjs/common": "^10.4.1",
    "@nestjs/config": "^3.2.3",
    "@nestjs/core": "^10.0.0",
    "@nestjs/platform-express": "^10.0.0",
    "@nestjs/swagger": "^7.4.0",
    "@swc/cli": "0.4.1-nightly.20240914",
    "@swc/core": "^1.7.26",
    "axios": "^1.7.7",
    "cache-manager": "^6.1.0",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.14.1",
    "nest-winston": "^1.9.7",
    "reflect-metadata": "^0.2.0",
    "rxjs": "^7.8.1",
    "winston": "^3.14.2",
    "winston-daily-rotate-file": "^5.0.0"
  },
```

## Project setup

```bash
npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
