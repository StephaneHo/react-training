"use client";

import { editBook } from "@/actions/action";
import { Book } from "@prisma/client";
import React, { useState } from "react";

type BookEditFormProps = {
  book: Book;
};
function BookEditForm({ book }: BookEditFormProps) {
  const [title, setTitle] = useState(book.title);

  const handleBookChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const editBookAction = editBook.bind(null, book.id, title);

  return (
    <div>
      <form action={editBookAction}>
        <h3 className="font-bold m-3">Ajouter un livre</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              className="border rounded p-2 w-full"
              id="title"
              value={title}
              onChange={(event) => handleBookChange(event)}
            />
          </div>
        </div>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </div>
  );
}

export default BookEditForm;
