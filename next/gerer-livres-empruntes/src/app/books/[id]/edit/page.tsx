import BookEditForm from "@/components/book-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
type BookEditProps = {
  params: { id: string };
};

async function BookEditPage(props: BookEditProps) {
  const id = parseInt(props.params.id);
  const book = await db.book.findFirst({ where: { id } });

  if (!book) {
    notFound();
  }
  return (
    <div>
      <BookEditForm book={book} />
    </div>
  );
}

export default BookEditPage;
