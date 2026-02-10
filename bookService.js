import API from "./api";

export const getBooks = async () => {
  const res = await API.get("/books");
  return res.data;
};

export const addBook = async (data) => {
  const res = await API.post("/books/add", data);
  return res.data;
};
