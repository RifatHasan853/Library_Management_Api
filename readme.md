# 📚 Library Management System API

A RESTful API for managing library books and borrow records using **Node.js**, **Express**, **MongoDB**, and **TypeScript**.

---

## 🚀 Features

- Create, retrieve, update, and delete books
- Borrow books with automatic stock updates
- Get a summary of borrowed books
- Sorting, filtering, and limit options for books
- Mongoose models with schema validation
- Centralized error handling
- Built with TypeScript

---

## 🛠️ Tech Stack

- Node.js
- Express
- MongoDB with Mongoose
- TypeScript
- Dotenv
- CORS

---

## 📂 Project Structure
```
├── Interfaces/
│ ├── book.interface.ts
│ └── borrow.interface.ts
├── Models/
│ ├── book.model.ts
│ └── borrow.model.ts
├── Routes/
│ ├── book.routes.ts
│ └── borrow.routes.ts
├── middleware/
│ └── errorHandler.ts
├── config/
│ └── db.ts
├── controllers/
│ ├── book.controller.ts
│ └── borrow.controller.ts
├── app.ts
├── server.ts
├── .env
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```
git clone <your-repo-url>
cd <your-project-folder>
```
### 2. Install Dependencies
```
npm install
```
### 3. Set Up Environment Variables

Create a .env file in the root directory:
```
env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/library
```
### 4. Run the Application
```
npm run dev
```
## 🗂️ API Endpoints
### 📖 Book Endpoints
```
| Method | Endpoint             | Description                                 |
| ------ | -------------------- | ------------------------------------------- |
| POST   | `/api/books`         | Create a new book                           |
| GET    | `/api/books`         | Get all books (filter/sort/limit supported) |
| GET    | `/api/books/:bookId` | Get a specific book by ID                   |
| PUT    | `/api/books/:bookId` | Update a book by ID                         |
| DELETE | `/api/books/:bookId` | Delete a book by ID                         |
```
### Query Parameters for `GET /api/books`

- `filter` → Filter by genre (e.g., `"FICTION"`)
- `sortBy` → Field to sort by (default: `"createdAt"`)
- `sort` → `"asc"` or `"desc"` (default: `"asc"`)
- `limit` → Number of results to return (default: `10`)
