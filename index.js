const express = require('express');
const app = express();


// Array  
const books = [
  { id: 1, title: 'Book One', author: 'Author One', year: 2001 },
  { id: 2, title: 'Book Two', author: 'Author Two', year: 2002 },
  { id: 3, title: 'Book Three', author: 'Author Three', year: 2003 }
];

// Route 
app.get('/books', (req, res) => {
  res.json(books);
});

//  book by ID
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const book = books.find(b => b.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});


//host
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
