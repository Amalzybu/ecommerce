# Ecommerce

A Node.js e-commerce web application built with Express, Sequelize, and MySQL. All tools and dependencies used in this project are **free and open-source** — you can clone and run this project at no cost.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | [Node.js](https://nodejs.org/) (free, open-source) |
| Framework | [Express.js](https://expressjs.com/) (free, open-source) |
| ORM | [Sequelize](https://sequelize.org/) (free, open-source) |
| Database | [MySQL](https://www.mysql.com/) Community Edition (free) |
| Templating | [EJS](https://ejs.co/) (free, open-source) |
| Auth | [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) + [bcrypt](https://github.com/kelektiv/node.bcrypt.js) (free, open-source) |

## Prerequisites

Make sure the following are installed on your machine (all free):

- [Node.js](https://nodejs.org/) v14 or higher
- [npm](https://www.npmjs.com/) (bundled with Node.js)
- [MySQL](https://dev.mysql.com/downloads/mysql/) Community Edition

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Amalzybu/ecommerce.git
cd ecommerce
```

### 2. Install dependencies

```bash
npm install
```

All packages are pulled from the npm registry and are free to use.

### 3. Set up the database

Start your MySQL server and create the database:

```sql
CREATE DATABASE ecommerce;
```

Update `config/config.json` and `config/db.js` with your MySQL credentials if they differ from the defaults:

```json
{
  "development": {
    "username": "root",
    "password": "your_password",
    "database": "ecommerce",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

### 4. Run database migrations

```bash
npx sequelize-cli db:migrate
```

### 5. (Optional) Seed sample data

```bash
npx sequelize-cli db:seed:all
```

### 6. Start the server

**Development** (with auto-reload via nodemon):

```bash
npm run devStart
```

**Production**:

```bash
npm start
```

The server starts on **http://localhost:3000** by default. You can override the port with a `PORT` environment variable:

```bash
PORT=8080 npm start
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/public/products` | List all products |
| POST | `/api/customer/register` | Register a new customer |
| POST | `/api/customer/login` | Authenticate and receive a JWT token |
| GET | `/api/customer/orders` | Get orders for the authenticated customer |

## License

This project is open-source. No purchase is required to clone, build, or run it.
