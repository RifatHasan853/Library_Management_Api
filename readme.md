Features
Add, retrieve, update, and delete books.

Borrow books with automatic inventory adjustment.

View summary of borrowed books.

Error handling for common issues.
Sorting, filtering, and pagination for books.
Built with TypeScript for type safety.
Mongoose models and middleware integration.

🛠️ Tech Stack
Node.js
Express
MongoDB with Mongoose
TypeScript
Dotenv
CORS
📂 Project Structure

├── Interfaces/           # TypeScript interfaces
│   ├── book.interface.ts
│   └── borrow.interface.ts
├── Models/               # Mongoose models
│   ├── book.model.ts
│   └── borrow.model.ts
├── Routes/               # Express routes
│   ├── book.routes.ts
│   └── borrow.routes.ts
├── middleware/
│   └── errorHandler.ts   # Centralized error handling
├── config/
│   └── db.ts             # MongoDB connection
├── controllers/
│   ├── book.controller.ts
│   └── borrow.controller.ts
├── app.ts                # Express app configuration
├── server.ts             # App entry point
├── .env                  # Environment variables
└── README.md             # Project documentation
⚙️ Installation
Clone the repository

git clone <repository-url>
cd <repository-folder>
Install dependencies
npm install
Configure environment variables

Create a .env file:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/library
Run the application

npm run dev
🗂️ API Endpoints
📖 Books
Method	Endpoint	Description
POST	/api/books	Create a new book
GET	/api/books	Get all books (filter/sort/limit supported)
GET	/api/books/:bookId	Get book by ID
PUT	/api/books/:bookId	Update book by ID
DELETE	/api/books/:bookId	Delete book by ID

Query Parameters for GET /api/books

filter - Filter by genre (e.g., "FICTION")

sortBy - Field to sort by (default: "createdAt")

sort - "asc" or "desc" (default: "asc")

limit - Number of results to return (default: 10)

📦 Borrow
Method	Endpoint	Description
POST	/api/borrow	Borrow a book (deduct copies)
GET	/api/borrow/summary	Get summary of borrowed books

🔒 Validation & Middleware
Book creation requires title, author, genre, isbn, and copies.

Borrowing a book checks if enough copies are available.

Borrowing automatically updates book availability.

Centralized error handling for validation and server errors.
