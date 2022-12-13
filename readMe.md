# WCS-express-challenge

## Description

The goal is to realize a simple CRUD on a MySQL `users` table :
- GET /api/users
- GET /api/users/1
- POST /api/users
- PUT /api/users/1
- DELETE /api/users/1

## Initialization

1. Clone this repo.
2. Run command `cd wcs-express-challenge` and `npm install`.
3. Create `.env` file base on `.env.sample` file and fill it with you MySQL user's informations.
4. Run command `npm run migrate` to initialize database.
5. Run command `npm run dev` to start the project.