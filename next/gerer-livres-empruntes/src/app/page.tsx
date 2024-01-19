import { db } from "@/db";
import { Book } from "@prisma/client";
import Link from "next/link";

export default async function Home() {
  const books = await db.book.findMany();

  const renderedBooks = books.map((book: Book) => {
    return (
      <Link
        key={book.id}
        href={`/books/${book.id}`}
        className="flex items-center justify-between p-2 border rounded"
      >
        {book.title}
      </Link>
    );
  });
  return (
    <div>
      <div className="text-xl font-bold">Livres</div>
      <div className="flex flex-col gap-2">{renderedBooks}</div>
    </div>
  );
}
