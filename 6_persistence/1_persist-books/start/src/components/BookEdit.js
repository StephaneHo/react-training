import { useState } from "react";

export const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 p-4 w-80">
        <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900">
          Nouveau titre:
        </h1>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={title}
          onChange={handleChange}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Enregistrer
        </button>
      </div>
    </form>
  );
};
