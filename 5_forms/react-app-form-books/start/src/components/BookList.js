import { BookDetails } from "./BookDetails";

export const BookList = () => {
  let books = [];
  console.log(books);

  const renderedBooks = books.map((book) => {
    return <BookDetails />;
  });

  return <div className="book-list">{renderedBooks}</div>;
};
