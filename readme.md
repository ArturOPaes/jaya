# Jaya test

## Installation

Jaya test requires [Node.js](https://nodejs.org/) v12+ to run.

#### Variables

You can export your variables to local enviroment or change de default in src/main/config/env.ts

```json
process.env.MONGO_URL
process.env.PORT
process.env.JWT_SECRET
process.env.BASICH_AUTH_USER
process.env.BASICH_AUTH_PASSWORD
process.env.SECRET_WEBHOOK
```

Install the dependencies and start the server.

```sh
npm i
npm build
node start
```

## Development

```sh
npm i
npm build:watch
npm debug
```

## Docker

setup your variables and run

```sh
docker-compose up
```
