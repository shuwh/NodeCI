# Advanced Node Start

## what is the function of the server

### Authentication // TODO: How to realize authentication

## Each function map to what files

## what is the structure of the code

### client

this is the client side code, written in React js

### Middleware

#### clearCache:

in blogRoutes.js file, every time client write to database, the Redis corresponding item should be removed

#### requireLogin.js:

in blogRoutes.js file, every time client send request to server, all need to check authentication using this middleware

## models

the schema for blogs and user in mongoDB

## routes

### authRoutes

handle authentication

### blogRoutes

handle blogs

## Service

### cache

the cache service

### passport

not sure what is this right now // TODO: figure out what is file is used for

1. passport is a package for Nodejs Authentication

- email + password
- OAuth: to use google, facebook, twitter etc as authentication
- OpenID

2. core part: strategies
