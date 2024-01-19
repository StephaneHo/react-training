import { deleteBook } from "@/actions/action";
import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ShowBookPageProps {
  params: {
    id: string;
  };
}
export default async function ShowBookPage(props: ShowBookPageProps) {
  const book = await db.book.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!book) {
    return notFound();
  }

  const deleteBookAction = deleteBook.bind(null, book.id);
  return (
    <div className="flex m-4 justify-between items-center">
      <h1 className="text-xl">{book.title}</h1>
      <div>
        <Link href={`/books/${book.id}/edit`} className="p-2 border rounded">
          Edit
        </Link>
      <form action={deleteBookAction}>
          <button className="p-2 border rounded">Delete</button>
        </form>
      </div>

      {book.author}
      {book.summary}
    </div>
  );
}
