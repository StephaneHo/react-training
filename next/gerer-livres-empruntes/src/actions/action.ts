"use server";

import React from "react";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editBook(id: number, title: string) {
  await db.book.update({ where: { id }, data: { title } });

  redirect(`/books/${id}`);
}

export async function deleteBook(id: number) {
  await db.book.delete({ where: { id } });
  redirect("/");
}

export async function addBook(
  formState: { message: string },
  formData: FormData
) {
  try {
    const title = formData.get("title");
    const isbn = formData.get("isbn");
    const author = formData.get("author");

    if (typeof title !== "string" || title.length < 3) {
      return { message: "le titre doit etre plus long" };
    }
    if (typeof isbn !== "string" || isbn.length < 3) {
      return { message: "l'isbn doit etre plus long" };
    }
    if (typeof author !== "string" || author.length < 3) {
      return { message: "le nom de l'auteur ne doit pas etre raccourci" };
    }

    const book = await db.book.create({
      data: {
        title,
        isbn,
        author,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { message: err.message };
    } else {
      return { message: "Something went wrong..." };
    }
  }
  redirect("/");
}
