import React, { useEffect, useState } from "react";
import { getBooks } from "../services/bookService";
import BookCard from "../components/BookCard";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  return (
    <div>
      <h2>Books</h2>
      {books.map(book => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
}

export default Books;
