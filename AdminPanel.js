import React, { useState } from "react";
import { addBook } from "../services/bookService";

function AdminPanel() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    availableCopies: 1
  });

  const handleAdd = async () => {
    await addBook(book);
    alert("Book Added");
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input placeholder="Title"
        onChange={e => setBook({...book, title: e.target.value})}/>
      <input placeholder="Author"
        onChange={e => setBook({...book, author: e.target.value})}/>
      <input placeholder="Category"
        onChange={e => setBook({...book, category: e.target.value})}/>
      <button onClick={handleAdd}>Add Book</button>
    </div>
  );
}

export default AdminPanel;
