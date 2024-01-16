import { Link } from "react-router-dom";
import { MainNavigation } from "../components/MainNavigation";

export const Books = () => {
  const BOOKS = [
    { id: "1", title: "Livre 1" },
    { id: "2", title: "Livre 2" },
    { id: "3", title: "Livre 3" },
  ];
  return (
    <>
      <h1>Mes livres</h1>

      <ul>
        {BOOKS.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
