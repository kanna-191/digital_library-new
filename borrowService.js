import API from "./api";

export const getBorrowHistory = async () => {
  const res = await API.get("/borrow");
  return res.data;
};
