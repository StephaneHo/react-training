import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { BookEdit } from "./BookEdit";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
export const BookDetails = ({ book, onDelete, onEdit }) => {
  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleSubmit = (id, newTitle) => {
    console.log({ newTitle });
    onEdit(id, newTitle);
  };

  return (
    <div className="mx-20 my-10">
      <div className="my-5">
        <img
          alt="books"
          src={`https://picsum.photos/seed/${book.id}/300/200`}
        />
      </div>
      <div className="flex">
        <div className="text-xl font-bold">{book.title}</div>

        <Popover placement="left">
          <PopoverTrigger className="mx-3">
            <PencilIcon className="h-6 w-6 text-blue-500" />
          </PopoverTrigger>

          <PopoverContent>
            <BookEdit onSubmit={handleSubmit} book={book} />
          </PopoverContent>
        </Popover>
        <button className="mx-1" onClick={handleDeleteClick}>
          <TrashIcon className="h-6 w-6 text-blue-500" />
        </button>
      </div>
    </div>
  );
};
