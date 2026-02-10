import React, { useEffect, useState } from "react";
import { getBorrowHistory } from "../services/borrowService";

function BorrowHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    const data = await getBorrowHistory();
    setHistory(data);
  };

  return (
    <div>
      <h2>Borrow History</h2>
      {history.map(item => (
        <div key={item._id}>
          <p>{item.book.title}</p>
          <p>Status: {item.status}</p>
        </div>
      ))}
    </div>
  );
}

export default BorrowHistory;
