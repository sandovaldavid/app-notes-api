# 📝 Notes API REST

A RESTful API for managing notes built with Node.js, Express, and PostgreSQL.

![Express.js](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/sandovaldavid/app-notes-api.git

cd app-notes-api

# Start with Docker
docker-compose up --build
```

## 🛠️ Environment Variables

Create a `.env` file in the root directory:

```env
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=db_webnotes
PORT=3000
# or
POSTGRES_URL=postgres://neondb_owner:
PORT=4000
```

## 🔌 API Endpoints

### 📋 Get All Notes

```http
GET /notes
```

**Response:** List of all notes

```json
[
  {
    "id": 1,
    "title": "Example Note",
    "content": "Note content"
  }
]
```

### 📖 Get Single Note

```http
GET /notes/:id
```

**Response:** Single note object

```json
{
  "id": 1,
  "title": "Example Note",
  "content": "Note content"
}
```

### ✏️ Create Note

```http
POST /notes
```

**Body:**

```json
{
  "title": "New Note",
  "content": "Note content"
}
```

### 🔄 Update Note

```http
PUT /notes/:id
```

**Body:**

```json
{
  "title": "Updated Note",
  "content": "Updated content"
}
```

### 🗑️ Delete Note

```http
DELETE /notes/:id
```

**Response:** 204 No Content

## 🐳 Docker Support

The project includes Docker configuration for easy deployment:

- PostgreSQL container
- Node.js API container
- Persistent volume for database
- Automatic database initialization

```bash
# Start services
docker-compose up

# Stop services
docker-compose down
```

## 💻 Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Run in production mode
npm start
```

## 🗄️ Database Schema

```sql
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);
```

## 🔍 Error Handling

The API includes built-in error handling for:

- ❌ Note not found (404)
- ❌ Invalid requests (400)
- ❌ Server errors (500)

## 📚 Tech Stack

- Node.js & Express
- PostgreSQL
- Docker & Docker Compose
- CORS enabled
- Morgan for logging

## 📄 License

This project is licensed under the ISC License.
