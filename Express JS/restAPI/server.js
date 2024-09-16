const express = require("express");
const app = express();

// Sample in-memory data
let books = [
  { id: 1, title: "1984", author: "Adam Jewels" },
  { id: 2, title: "1999", author: "Piyush Verma" },
  { id: 3, title: "1979", author: "Ajay Gupta" },
  { id: 4, title: "1909", author: "Aman Rao" },
];

app.use(express.json());

// Basic Route
app.get("/", (req, res) => {
  res.send("Welcome to the Restful API with Express.js");
});

// Get all Books
app.get("/api/books", (req, res) => {
  res.json(books);
});

// Get a specific Book
app.get("/api/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookId);

  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

// Create a New Book
app.post("/api/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT to update a book
app.put("/api/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1)
    return res.status(404).json({ message: "Book not found" });

  books[bookIndex] = {
    id: bookId,
    title: req.body.title,
    author: req.body.author,
  };

  res.json(books[bookIndex]);
});

// Delete a book
app.delete("/api/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1)
    return res.status(404).json({ message: "Book not found" });

  const deletedbook = books.splice(bookIndex, 1);
  res.json(deletedbook[0]);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
