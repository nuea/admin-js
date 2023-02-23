# admin-js

## Getting started
### Overview <br>
An AdminJS application consists of:
- a core package 
```sh
    npm i adminjs
```
- a plugin (for a framework of your choice)
```sh
    npm i @adminjs/express      # for Express server
```
- an adapter for (for a ORM/ODM of your choice)
```sh
    npm i @adminjs/mongoose      # for Mongoose
```
Before setup make sure you have **ts-node** and **typescript** installed.
- ts-node:
```sh
    npm install -g ts-node 
    ts-node --version
```
- typescript:
```sh
    npm install -g typescript
```
## Setup
To setup AdminJS panel with **Express.js** you need to have express installed and required peer dependencies:
```sh
    npm i express tslib express-formidable express-session
```
Install express types and **ts-node**:
```sh
    npm i -D @types/express ts-node
```