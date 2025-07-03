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
