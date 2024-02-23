import { useState } from "react";
import BookEdit from "./BookEdit";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
export const BookDetails = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="mx-20 my-10">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div className="">{content}</div>
      <div className="flex">
        <button className="edit" onClick={handleEditClick}>
          <PencilIcon className="h-6 w-6 text-blue-500" />
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          <TrashIcon className="h-6 w-6 text-blue-500" />
        </button>
      </div>
    </div>
  );
};
