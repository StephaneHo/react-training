import { BookDetails } from "./BookDetails";

export const BookList = ({ books, onDelete, onEdit }) => {
  const renderedBooks = books.map((book) => {
    return (
      <BookDetails
        onEdit={onEdit}
        onDelete={onDelete}
        key={book.id}
        book={book}
      />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
};
